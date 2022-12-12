export const validate = (values) => {
  const errors = {};

  if (!values.Name) {
    errors.Name = ' Name is Required';
  }

  if (!values.Password) {
    errors.Password = 'password is Required';
  }

  if (values.Password !== values.ConfirmPassword)
    return (errors.Password = 'Does not match password');

  if (!values.Email) {
    errors.Email = 'Email is Required';
  }

  if (!values.ConfirmPassword) {
    errors.password = 'Password is Required';
  } else if (values.Password.length < 6) {
    errors.Password = 'Password length must be 6 character';
  }

  return errors;
};
