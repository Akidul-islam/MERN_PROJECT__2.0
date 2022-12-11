const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const takeError = require('../utilities/error');
const db = require('./users');
require('dotenv').config();
const secret = process.env.JWTSECRET;

// Signup service
const registerService = async ({ name, email, password, role }) => {
  const findUser = await db.findUserByProperty('email', email);

  if (findUser) throw takeError('User already exist', 400);

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password.toString(), salt);
  return await db.createNewUser({ name, email, password: hash, role });
};

// Login service
const loginService = async ({ email, password }) => {
  const user = await db.findUserByProperty('email', email);
  if (!user) throw takeError('user does not exits ', 401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw takeError('invalid creadientTial');

  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    accountStatus: user.accountStatus,
  };
  return jwt.sign(payload, secret, { expiresIn: '6h' });
};

// user updatee services
const updateService = async (userId, { name, password, role }) => {
  const user = await db.findUserByProperty('_id', userId);
  if (!user) {
    throw takeError('User not found', 404);
  }
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password.toString(), salt);
    const hashMe = {
      name,
      password: hash,
    };
    user.password = hashMe.password ?? user.password;
  }
  user.role = role ?? user.role;
  user.name = name ?? user.name;
  return await user.save();
};

// get all data and also query data servicess
const queryService = async (queryValue) => {
  const queryObj = {};
  if (queryValue) {
    const { name, email, role } = queryValue;
    if (name) {
      queryObj.name = { $regex: name, $options: 'i' };
    }
    if (email) {
      queryObj.email = email;
    }
    if (role) {
      queryObj.role = role;
    }
  }
  return await db.getUsers(queryObj);
};

module.exports = { registerService, loginService, updateService, queryService };
