import { StyleSheet, TextInput } from 'react-native';
import { useField } from 'formik';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d0d7de',
    borderRadius: 4,
    marginBottom: 12,
    padding: 12,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={styles.input}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
