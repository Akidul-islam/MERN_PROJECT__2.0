const patientController = require('../../controller/patient');
const router = require('express').Router();

// patient prefixing routes
router
  .route('/')
  .post(patientController.createPatient)
  .get(patientController.getPatients);

router
  .route('/:patientId')
  .get(patientController.getPatient)
  .patch(patientController.patchPatientUpdate)
  .delete(patientController.deletedPatients);

module.exports = router;
