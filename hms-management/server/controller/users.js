const users = require('../services/auth');
// error handler middleware
const takeError = require('../utilities/error');
// asynchandler
const asyncHandler = require('../utilities/asyncHandler');
const Users = require('../models/users');
const Patient = require('../models/patientProfile');
const Doctor = require('../models/doctorProfile');
const db = require('../services/users');
const crudOperation = require('../services/rolesBaseActivity');

// admin dashborad data
const getOverview = async (req, res, next) => {
  const hospitalInfo = [
    { key: 'admitted', query: { 'hospitalInfo.admitted': true } },
    { key: 'discharged', query: { 'hospitalInfo.discharged': true } },
    { key: 'waiting', query: { 'hospitalInfo.waiting': true } },
    {
      key: 'diagnoses',
      query: { 'hospitalInfo.diagnoses.isCompleted': true },
    },
    { key: 'surgery', query: { 'hospitalInfo.surgery': true } },
    { key: 'cancer', query: { 'hospitalInfo.diseasis': 'cancer' } },
    // { key: 'diabetes', query: { 'hospitalInfo.diseasis': 'diabetes' } },
  ];
  const [patient, doctor, admitted, discharged, waiting, surgery, cancer] =
    await Promise.all([
      crudOperation.dbGetItems(patient),
      crudOperation.dbGetItems(Doctor),
      crudOperation.dbGetItems(Patient, { 'hospitalInfo.admitted': true }),
      crudOperation.dbGetItems(Patient, { 'hospitalInfo.discharged': true }),
      crudOperation.dbGetItems(Patient, { 'hospitalInfo.waiting': true }),
      crudOperation.dbGetItems(Patient, {
        'hospitalInfo.diagnoses.isCompleted': true,
      }),
      crudOperation.dbGetItems(Patient, { 'hospitalInfo.surgery': true }),
      crudOperation.dbGetItems(Patient, {
        'hospitalInfo.diseasis': 'cancer',
      }),
    ]);

  const hospitalData = {
    patients: {
      total: patient.length,
      admitted: admitted.length,
      discharged: discharged.length,
      waiting: waiting.length,
      surgery: surgery.length,
      diagnoses: {
        total: cancer.length + cancer.length + 400 + 250,
        cancer: cancer.length,
        diabetes: 400,
        other: 250,
      },
    },

    staff: {
      total: 1245 + doctor.length,
      physicians: 215,
      nurses: 635,
      administrative: 395,
      doctor: doctor.length,
      gender: {
        male: 530,
        female: 715,
      },
      certifications: {
        'medical license': 1095,
        CPR: 980,
        ACLS: 785,
        PALS: 620,
        other: 290,
      },
    },
    appointments: {
      total: 7850,
      upcoming: 5230,
      completed: 2400,
      cancelled: 220,
      specialties: {
        cardiology: 950,
        neurology: 740,
        oncology: 610,
        orthopedics: 550,
        pediatrics: 950,
        other: 3050,
      },
    },
    inventory: {
      transport: {
        ambulins: 10,
      },
      medications: {
        total: 685,
        available: 475,
        out_of_stock: 210,
      },
      supplies: {
        total: 3225,
        available: 2980,
        out_of_stock: 245,
      },
      equipment: {
        total: 500,
        available: 400,
        out_of_service: 100,
      },
    },

    financials: {
      revenue: 3500000,
      expenses: 2750000,
      profit: 750000,
      outstanding_balances: 225000,
    },
    facilities: {
      maintenance_requests: 12,
      energy_usage: {
        current_month: 16500,
        previous_month: 17450,
      },
      occupancy_rate: 85,
    },
    system: {
      performance: {
        cpu: 70,
        memory: 75,
        disk: 50,
      },
      uptime: '25d 3h 12m',
      updates_available: 5,
    },
  };

  return hospitalData;
};

// patients dashborad data
const getPatients = async (req, res, next) => {
  const [allPatient, admitted, discharged, waiting, cancer] = await Promise.all(
    [
      crudOperation.dbGetItems(
        Patient,
        {},
        undefined,
        'userId',
        '-password -__v -createdAT'
      ),
      crudOperation.dbGetItems(Patient, { 'hospitalInfo.admitted': true }),
      crudOperation.dbGetItems(Patient, { 'hospitalInfo.discharged': true }),
      crudOperation.dbGetItems(Patient, { 'hospitalInfo.waiting': true }),
      crudOperation.dbGetItems(Patient, {
        'hospitalInfo.diagnoses.isCompleted': true,
      }),
      crudOperation.dbGetItems(Patient, {
        'hospitalInfo.diseasis': 'cancer',
      }),
    ]
  );
  return {
    allPatient,
    details_patient: {
      total: admitted.length + discharged.length + waiting.length,
      admitted: admitted.length,
      discharged: discharged.length,
      waiting: waiting.length,
      total_surgery: 460,
      diagnoses: {
        total: cancer.length + 120 + 90,
        cancer: cancer.length,
        diabetes: 120,
        other: 90,
        recent_week: [
          { title: 'patient', amount: 1863, percent: '2.20' },
          { title: 'Report', amount: 863, percent: '2.37' },
          { title: 'Inject', amount: 363, percent: '2.97' },
          { title: 'Surgery', amount: 163, percent: '2.97' },
        ],
      },
    },
    medical_history: 345,
    progress_note: 645,
    visited_department: [
      { title: 'cardiology', cardiology: 40 },
      { title: 'neurology', neurology: 50 },
      { title: 'dermatology', dermatology: 40 },
    ],
    total_payment: 56045,
  };
};

const getDoctors = async (req, res, next) => {
  // last save day patients
  const end = new Date();
  const manupulated = 2 * 24 * 60 * 60 * 1000;
  const start = new Date(end.getTime() - manupulated);

  const [doctors, patients] = await Promise.all([
    crudOperation.dbGetItems(
      Doctor,
      {},
      undefined,
      'userId',
      '-password -__v -createdAT'
    ),
    crudOperation.dbGetItems(
      Patient,
      {
        createdAt: {
          $gte: start,
          $lte: end,
        },
      },
      undefined,
      'userId',
      '-password -role -__v'
    ),
  ]);
  return {
    doctors,
    vistByGender: {
      male: '40k',
      women: '88k',
      childern: '20k',
    },
    doctorWork: {
      recent: 'recent week',
      report: 150,
      inject: 589,
      surgery: 120,
    },
    departmentVisted: {
      cardiology: '60%',
      neurology: '40%',
      dermatology: '30%',
    },
    reported_case: [
      { title: 'cardiology', cardiology: '30k', percent: 30 },
      { title: 'neurology', neurology: '40k', percent: 60 },
      { title: 'dermatology', dermatology: '70k', percent: 45 },
    ],
    recentActivity: patients,
  };
};
// user create by roles
const usersCreate = (req, res, next) => {
  res.json({ fjksj: 'whathappend' });
};

// getSingle users
const getUser = async (req, res, next) => {
  const { id: userId } = req.params;

  try {
    const singleUser = await db.findUserByProperty('_id', userId);
    if (!singleUser) throw takeError('sorry user does not exits', 400);
    res.status(200).json({ status: 'successs', result: singleUser });
  } catch (error) {
    next(error);
  }
};

const patchUsersUpdate = async (req, res, next) => {
  const { name, password, password2, role } = req.body;
  const { id: userId } = req.params;
  if (password < 6) throw takeError('password will be greater than 5', 400);
  if (password !== password2) throw takeError('password does not match', 400);

  try {
    const user = await users.updateService(userId, { name, password, role });
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const usersDelete = (req, res) => {
  res.send('I am deleted users');
};

module.exports = {
  usersCreate,
  getOverview: asyncHandler('success', getOverview),
  getPatients: asyncHandler('success', getPatients),
  getDoctors: asyncHandler('success', getDoctors),
  getUser,
  patchUsersUpdate,
  usersDelete,
};
