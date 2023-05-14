const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const takeError = require('../utilities/error');
const Users = require('../models/users');
const Patients = require('../models/patientProfile');
const Doctors = require('../models/doctorProfile');
const Admin = require('../models/admin');
const crudOperation = require('../services/rolesBaseActivity');
require('dotenv').config();
const secret = process.env.JWTSECRET;

// Signup service
const registerService = async (
  { name, email, password, role, rest },
  authUser
) => {
  // Check if user with the same email already exists
  const existingUser = await crudOperation.dbFindPropertyById(
    Users,
    'email',
    email
  );
  if (existingUser) {
    throw takeError('User already exists', 400);
  }

  // Hash the user's password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password.toString(), salt);

  // Create a new user by admin
  const newUser = await crudOperation.dbCreateNewItem(Users, {
    name,
    email,
    password: hashedPassword,
    role,
    accountStatus: authUser ? 'Approved' : 'Pending',
  });

  const userType = newUser.role[0];
  const userProfileModel = {
    patient: Patients,
    doctor: Doctors,
    admin: Admin,
  };
  if (
    authUser &&
    authUser.role.includes('admin') &&
    Object.keys(rest).length > 0
  ) {
    const newUserProfile = await crudOperation.dbCreateNewItem(
      userProfileModel[userType],
      {
        userId: newUser._id,
        ...rest,
      }
    );
    return { user: newUser, profile: newUserProfile };
  }
  const userProfile = await crudOperation.dbCreateNewItem(
    userProfileModel[userType],
    {
      userId: newUser._id,
    }
  );
  return { user: roleByUser, userProfile };
};

// Login service
const loginService = async ({ email, password }) => {
  const user = await crudOperation.dbFindPropertyById(Users, 'email', email);
  if (!user) throw takeError('user does not exits ', 404);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw takeError('invalid creadientTial');

  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    accountStatus: user.accountStatus,
  };
  const token = jwt.sign(payload, secret, { expiresIn: '24h' });
  return { user, token };
};

// user updatee services
const updateService = async (userId, { name, password, role }) => {
  const user = await crudOperation.dbFindPropertyById(Users, '_id', userId);
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
  return await crudOperation.dbGetItems(User, queryObj);
};

module.exports = { registerService, loginService, updateService, queryService };
