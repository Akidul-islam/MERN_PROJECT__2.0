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
  const queryObject = {};
  if (data) {
    const { fullName, sex, phone, dmseId } = data;
    if (fullName) {
      queryObject.fullName = { $regex: fullName, $options: 'i' };
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
  return await crudOperation
    .dbGetItems(Doctor, queryObject)
    .populate('userId', 'name email accountStatus');
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
const doctorUpdateService = async (doctorData, doctorId, imageFile) => {
  let doctor = await crudOperation.dbFindPropertyById(
    Doctor,
    'userId',
    doctorId
  );
  if (!doctor) throw takeError('doctor does not found', 404);
  console.log(imageFile);
  doctor = await crudOperation.dbUpdateItem(Doctor, doctor._id, {
    ...doctorData,
    // avater: `http://localhost:3000/${imageFile?.path}`,
    avater: imageFile,
  });

  return await doctor.save();
};

// deleted service
const deleteDoctorService = async (doctorId) => {
  const doctor = await crudOperation.dbFindPropertyById(
    Doctor,
    'userId',
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
