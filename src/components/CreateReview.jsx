import { useState } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 16,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    marginTop: 8,
    padding: 12,
    alignItems: 'center',
  },
  errorText: {
    color: theme.colors.error,
    marginTop: 4,
  },
});

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Rating must be between 0 and 10')
    .max(10, 'Rating must be between 0 and 10')
    .required('Rating is required'),
  text: yup.string(),
});

export const CreateReviewContainer = ({ onSubmit, error }) => {
  return (
    <Formik
      initialValues={{ ownerName: '', repositoryName: '', rating: '', text: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="ownerName" placeholder="Repository owner name" />
          <FormikTextInput name="repositoryName" placeholder="Repository name" />
          <FormikTextInput name="rating" placeholder="Rating between 0 and 10" />
          <FormikTextInput name="text" placeholder="Review" multiline />
          {error && <Text style={styles.errorText}>{error}</Text>}
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text fontWeight="bold" color="white">
              Create a review
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
      await createReview({ ...values, rating: Number(values.rating) });
      navigate('/');
    } catch (e) {
      setError('Creating the review failed');
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} error={error} />;
};

export default CreateReview;
