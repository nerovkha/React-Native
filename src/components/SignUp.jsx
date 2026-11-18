import { useState } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import useAuthStorage from '../hooks/useAuthStorage';

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
  username: yup
    .string()
    .min(1, 'Username must be at least 1 character long')
    .max(30, 'Username must be at most 30 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters long')
    .max(50, 'Password must be at most 50 characters long')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required'),
});

export const SignUpContainer = ({ onSubmit, error }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '', passwordConfirmation: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry />
          <FormikTextInput
            name="passwordConfirmation"
            placeholder="Password confirmation"
            secureTextEntry
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text fontWeight="bold" color="white">
              Sign up
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      const { data } = await signIn({ username, password });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      navigate('/');
    } catch (e) {
      setError('Sign up failed, the username may already be taken');
    }
  };

  return <SignUpContainer onSubmit={onSubmit} error={error} />;
};

export default SignUp;
