const takeError = require('../utilities/error');
const { registerService, loginService } = require('../services/auth');

const register = async (req, res, next) => {
  console.log(req.body);
  const { name, email, password, confirmPassword, role } = req.body;
  // if (!(name && email && password && confirmPassword)) {
  //   throw takeError('invalid input enter', 400);
  // }
  if (password < 6) throw takeError('password will be greater than 5', 404);

  if (password !== confirmPassword)
    return res.status(400).json({ msg: 'password does not match' });

  try {
    const users = await registerService({ name, email, password, role });
    res.status(200).json({ sucess: 'ok', data: users, username: users.name });
  } catch (error) {
    next(error.message);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!(email && password)) throw takeError('invalid emaill or password', 400);

  try {
    const token = await loginService({ email, password });
    res.status(201).json({ succes: 'login success fully', token });
  } catch (error) {
    next(error.message);
  }
};

module.exports = { register, login };
