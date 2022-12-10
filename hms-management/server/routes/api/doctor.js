const doctorController = require('../../controller/doctor')
const router = require('express').Router()
const authenticate = require('../../middleware/auth')

// patient prefixing routes
router.route('/:doctorId').get(doctorController.getDoctor).patch(doctorController.patchDoctorUpdate).delete(doctorController.deletedDoctor)

router.route('/').post(authenticate, doctorController.createDoctor).get(doctorController.getDoctors)

module.exports = router