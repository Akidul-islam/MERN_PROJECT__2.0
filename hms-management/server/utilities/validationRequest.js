const takeError = require('./error');

// email validate
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// password validation
function isValidPassword(password) {
  // Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// register validation
const registerRequest = (name, email, password, confirmPassword) => {
  if (!name || !email || !password || !confirmPassword)
    throw takeError('Invalid input', 404);

  if (!isValidEmail(email))
    throw takeError('please proved valid email adresss', 404);

  if (password.length < 6)
    throw takeError('Password must be at least 6 characters long', 404);

  if (password !== confirmPassword)
    throw takeError('Passwords do not match', 404);
};

module.exports = { registerRequest };
