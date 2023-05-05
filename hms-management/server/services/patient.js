const Patient = require('../models/patientProfile');
const Users = require('../models/users');
const takeError = require('../utilities/error');

const crudOperation = require('../services/rolesBaseActivity');

//  patient can upate annd edit him/her profile
const createPatientService = async (bodyData, user) => {
  // check  user profile exites or not
  const patientExits = await crudOperation.dbFindPropertyById(
    Patient,
    'userId',
    user._id
  );
  if (patientExits) throw takeError('already users exits', 404);
  const data = {
    userId: user._id,
    name: user.name,
    email: user.email,
    role: user.role[0],
    ...bodyData,
  };
  // create user profile
  const patient = await crudOperation.dbCreateNewItem(Patient, data);
  return patient;
};

// get all patient and query systems
const patientsService = async (data) => {
  const queryObject = {};
  if (data) {
    const { name, sex, phone } = data;
    if (name) {
      queryObject.name = { $regex: name, $options: 'i' };
    }

    if (sex) {
      queryObject.sex = { $regex: sex, $options: 'i' };
    }
    if (phone) {
      queryObject.phone = phone;
    }
  }
  return await crudOperation.dbGetItems(Patient, queryObject);
};

// singlePatients
const singlePatinetService = async (patientId) => {
  const patient = await crudOperation.dbFindPropertyById(
    Patient,
    'userId',
    patientId
  );
  if (!patient) throw takeError('patient does not exits', 400);
  return await Patient.findOne({ _id: patient._id }).populate(
    'userId',
    '-password'
  );
};

//patients update/edit his/her profile
const patientUpdateService = async (patientId, patientData) => {
  const patient = await crudOperation.dbFindPropertyById(
    Patient,
    'userId',
    patientId
  );
  if (!patient) throw takeError('does not exits', 404);
  // const user = await crudOperation.dbFindPropertyById(
  //   Users,
  //   '_id',
  //   patient.userId
  // );
  //   2 ta id equal bt match kore na kano...?
  // if (patient.userId._id.toString() === user._id.toString()) {
  //   (user.name = patientData.name ?? user.name),
  //     (user.role[0] = patientData.role ?? user.role[0]);
  //   await user.save();
  // }

  patient.fullName = patientData.fullName ?? patient.fullName;
  patient.address = patientData.address ?? patient.address;
  patient.phone = patientData.phone ?? patient.phone;
  patient.age = patientData.age ?? patient.age;

  return await patient.save();
};

// deleted service
const deletePatientService = async (patientId) => {
  // patientId = client send user._id
  const patient = await crudOperation.dbFindPropertyById(
    Patient,
    'userId',
    patientId
  );
  if (!patient) throw takeError('user not exit', 400);
  // patientProfile deleted
  await crudOperation.dbDeletedItem(Patient, patient._id);
  //  user deleted
  await crudOperation.dbDeletedItem(Users, patientId);
};

module.exports = {
  patientsService,
  createPatientService,
  singlePatinetService,
  patientUpdateService,
  deletePatientService,
};
