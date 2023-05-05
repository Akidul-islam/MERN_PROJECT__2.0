const doctorController = require('../../controller/doctor');
const router = require('express').Router();
const authenticate = require('../../middleware/auth');
const upload = require('../../middleware/fileUpload');
// patient prefixing routes
router
  .route('/:doctorId')
  .get(doctorController.getDoctor)
  .patch(upload.single('avater'), doctorController.patchDoctorUpdate)
  .delete(doctorController.deletedDoctor);

router
  .route('/')
  .post(authenticate, doctorController.createDoctor)
  .get(doctorController.getDoctors);

module.exports = router;
