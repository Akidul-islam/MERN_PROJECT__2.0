const patientController = require('../../controller/patient')
const router = require('express').Router()
const authenticate = require('../../middleware/auth')

// patient prefixing routes
router.route('/:patientId').get(patientController.getPatient).patch(patientController.patchPatientUpdate).delete(patientController.deletedPatients)

router.route('/').post(authenticate, patientController.createPatient).get(patientController.getPatients)

module.exports = router