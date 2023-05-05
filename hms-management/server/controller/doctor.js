// doctor servicess
const serviceDc = require('../services/doctor');

// post create Doctor
const createDoctor = async (req, res, next) => {
  try {
    const doctor = await serviceDc.createDoctorService(req.body, req.user);
    res.status(201).json({ status: 'success', data: doctor });
  } catch (error) {
    next(error);
  }
};

// querypatients
const getDoctors = async (req, res, next) => {
  try {
    const doctors = await serviceDc.doctorsService(req.query);
    res.status(200).json({
      status: 'succes',
      data: { dataList: doctors, isbn: doctors.length },
    });
  } catch (error) {
    next(error);
  }
};

// single patient
const getDoctor = async (req, res, next) => {
  const { doctorId } = req.params;
  try {
    const doctor = await serviceDc.singleDoctorService(doctorId);
    res.status(200).json({ status: 'success', data: doctor });
  } catch (error) {
    next(error);
  }
};

// update is reusable functionlity
const patchDoctorUpdate = async (req, res, next) => {
  const { doctorId } = req.params;
  try {
    const doctor = await serviceDc.doctorUpdateService(
      doctorId,
      req.body,
      req.user
    );
    res.status(203).json({ status: 'success', data: doctor });
  } catch (error) {
    next(error);
  }
};

// deleted doctor account
const deletedDoctor = async (req, res, next) => {
  const { doctorId } = req.params;
  try {
    await serviceDc.deleteDoctorService(doctorId);
    res
      .status(200)
      .json({ results: `doctor ${doctorId} successfully deleted` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDoctor,
  getDoctors,
  createDoctor,
  patchDoctorUpdate,
  deletedDoctor,
};
