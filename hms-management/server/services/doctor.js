const Doctor = require('../models/doctorProfile');
const Users = require('../models/users');
const takeError = require('../utilities/error');

const crudOperation = require('../services/rolesBaseActivity');

// doctor profile create
const createDoctorService = async (bodyData, user) => {
  // doctor profile already exits throw error
  // check user profile exits or not
  const doctorExits = await crudOperation.dbFindPropertyById(
    Doctor,
    'userId',
    user._id
  );
  if (doctorExits) throw takeError('already users exits', 404);
  const data = {
    userId: user._id,
    name: user.name,
    email: user.email,
    role: user.role[0],
    ...bodyData,
  };
  // create doctor profile
  const doctor = await crudOperation.dbCreateNewItem(Doctor, data);
  return doctor;
};

// get all doctors and query systems
const doctorsService = async (data) => {
  const queryObject = { role: 'doctor' };
  if (data) {
    const { name, sex, phone, dmseId } = data;
    if (name) {
      queryObject.name = { $regex: name, $options: 'i' };
    }

    if (sex) {
      queryObject.sex = { $regex: sex, $options: 'i' };
    }
    if (phone) {
      queryObject.phone = phone;
    }
    if (dmseId) {
      queryObject.dmseId = dmseId;
    }
  }
  return await crudOperation.dbGetItems(Users, queryObject);
};

// singledoctors
const singleDoctorService = async (userId) => {
  const doctor = await crudOperation.dbFindPropertyById(
    Doctor,
    'userId',
    userId
  );
  if (!doctor) throw takeError('doctor does not exits', 400);
  return await Doctor.findOne({ _id: doctor._id }).populate(
    'userId',
    '-password'
  );
};

//doctor update/edit his/her profile
const doctorUpdateService = async (userId, doctorData) => {
  const doctor = await crudOperation.dbFindPropertyById(
    Doctor,
    'userId',
    userId
  );
  if (!doctor) throw takeError('doctor does not found', 404);
  //   2 ta id equal bt match kore na kano...?
  // if (doctor.userId._id.toString() === user._id.toString()) {
  //   (user.name = doctorData.name ?? user.name),
  //     (user.role[0] = doctorData.role ?? user.role[0]);
  //   await user.save();
  // }

  doctor.fullName = doctorData.fullName ?? doctor.fullName;
  doctor.address = doctorData.address ?? doctor.address;
  doctor.phone = doctorData.phone ?? doctor.phone;
  doctor.age = doctorData.age ?? doctor.age;
  return await doctor.save();
};

// deleted service
const deleteDoctorService = async (doctorId) => {
  const doctor = await crudOperation.dbFindPropertyById(
    Doctor,
    '_id',
    doctorId
  );
  if (!doctor) throw takeError('user not exit', 400);
  return await crudOperation.dbDeletedItem(Doctor, doctorId);
};

module.exports = {
  createDoctorService,
  doctorsService,
  singleDoctorService,
  deleteDoctorService,
  doctorUpdateService,
};
