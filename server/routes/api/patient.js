const patientController = require("../../controller/patient");
const router = require("express").Router();
const upload = require("../../middleware/fileUpload");
// patient prefixing routes
router
  .route("/")
  .post(patientController.createPatient)
  .get(patientController.getPatients);

router
  .route("/:patientId")
  .get(patientController.getPatient)
  .patch(upload.single("avater"), patientController.patchPatientUpdate)
  .delete(patientController.deletedPatients);

module.exports = router;
