const takeError = require('../utilities/error');
const { registerService, loginService } = require('../services/auth');

const register = async (req, res, next) => {
  const { name, email, password, confirmPassword, role } = req.body;
  if (!(name && email && password && confirmPassword)) {
    return res.status(500).json({ nameEmail: 'invalid input ' });
  }
  if (password < 6) throw takeError('password will be greater than 5', 404);

  if (password !== confirmPassword)
    return res.status(400).json({ msg: 'password does not match' });

  try {
    const users = await registerService({ name, email, password, role });
    res.status(200).json({ sucess: 'ok', username: users.name });
  } catch (error) {
    next(error.message);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!(email && password)) throw takeError('invalid emaill or password', 400);

  try {
    const { user, token } = await loginService({ email, password });
    const results = {
      userId: user._id,
      name: user.name,
      email: user.email,
      status: user.accountStatus,
      role: user.role[0],
    };
    res.status(201).json({
      succes: 'login success fully',
      results,
      token,
    });
  } catch (error) {
    next(error.message);
  }
};

module.exports = { register, login };
