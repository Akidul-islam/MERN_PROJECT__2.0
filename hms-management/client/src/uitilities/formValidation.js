export const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'First Name is Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name is Required';
  }

  if (!values.email) {
    errors.email = 'Email is Required';
  }

  if (!values.password) {
    errors.password = 'Password is Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password length must be 6 character';
  }

  return errors;
};
