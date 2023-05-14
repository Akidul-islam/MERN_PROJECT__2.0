const jwt = require('jsonwebtoken');
const Users = require('../models/users');
require('dotenv').config();
const secret = process.env.JWTSECRET;
const authenticate = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    token = token.split(' ')[1];
    const decoded = jwt.verify(token, secret);

    const user = await Users.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user;
    next();
  } catch (e) {
    return res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = authenticate;
