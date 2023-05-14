// asyncHandler
const asyncHandler = require('../utilities/asyncHandler');
// validation
const validate = require('../utilities/validationRequest');
const { registerService, loginService } = require('../services/auth');

// regiser form
const register = async (req, res, next) => {
  const { name, email, password, confirmPassword, role, ...rest } = req.body;
  validate.registerRequest(name, email, password, confirmPassword, rest);
  const user = await registerService(
    { name, email, password, role, rest },
    req.user
  );
  return user;
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const { user, token } = await loginService({ email, password });
  return {
    userId: user._id,
    name: user.name,
    email: user.email,
    status: user.accountStatus,
    role: user.role[0],
    token,
  };
};

module.exports = {
  register: asyncHandler('registeration successfull', register),
  login: asyncHandler('login successfull', login),
};
