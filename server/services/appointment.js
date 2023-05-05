const Appointment = require("../models/appointment");
const Doctor = require("../models/doctorProfile");
const Patient = require("../models/patientProfile");
const Users = require("../models/users");
const crudOperation = require("../services/rolesBaseActivity");
const takeError = require("../utilities/error");

const postAppointmentService = async (bodyData, authUser) => {
  const { patientName, doctorName, departmentName, date, symptoms } = bodyData;

  const user = await crudOperation.dbFindPropertyById(
    Users,
    "_id",
    authUser._id
  );
  if (!user) return takeError("user doest not exits", 404);
  const userDoc = await crudOperation.dbFindPropertyById(
    Users,
    "name",
    doctorName
  );

  const data = {
    patientId: authUser._id,
    patientName,
    doctorId: userDoc._id,
    doctorName,
    departmentName,
    symptoms,
    date,
  };
  const appointmentList = await crudOperation.dbCreateNewItem(
    Appointment,
    data
  );
  // const userRoleModal = authUser.role.includes("doctor") ? Doctor : Patient;
  let profilePatient = await crudOperation.dbFindPropertyById(
    Patient,
    "userId",
    authUser._id
  );
  let profileDoc = await crudOperation.dbFindPropertyById(
    Doctor,
    "userId",
    userDoc._id
  );
  profilePatient = await Patient.findByIdAndUpdate(
    profilePatient._id,
    {
      $push: { appointment: appointmentList._id },
    },
    { new: true, findAndModify: false }
  );

  profileDoc = await Doctor.findByIdAndUpdate(
    profileDoc._id,
    {
      $push: { appointment: appointmentList._id },
    },
    { new: true, findAndModify: false }
  );

  return appointmentList;
};

const getAppointments = async (authUser) => {
  const userRoleModal = authUser.role.includes("doctor") ? Doctor : Patient;
  return await crudOperation.dbGetItems(Appointment, { userId: authUser._id });
  // return await crudOperation.dbFindPropertyById(
  //   Appointment,
  //   "userId",
  //   authUser._id
  // );
  // .populate("appointment", "-_v");
};

// utilites route
const updateDocAndPatient = (userRoleModal, userId, updateId) => {
  return userRoleModal.findByIdAndUpdate(
    userId,
    {
      $push: { appointment: updateId },
    },
    { new: true, findAndModify: false }
  );
};

const getAppointment = () => {};

const patchAppointmentService = async (bodyData, userAuth, paramId) => {
  const findappointment = await crudOperation.dbFindPropertyById(
    Appointment,
    "_id",
    paramId
  );

  if (!findappointment)
    return takeError(" params id does not found appointment list");

  if (userAuth.role.includes("doctor")) {
    return await crudOperation.dbUpdateItem(
      Appointment,
      findappointment._id,
      bodyData
    );
  }
};

const deleteAppointmentService = () => {};

module.exports = {
  postAppointmentService,
  getAppointment,
  getAppointments,
  patchAppointmentService,
  deleteAppointmentService,
};
