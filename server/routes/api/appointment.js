const conAppointment = require("../../controller/appointment");
const authenticate = require("../../middleware/auth");
const router = require("express").Router();

router.route("/:id").patch(conAppointment.patchAppointment);

router
  .route("/")
  .post(conAppointment.createAppointment)
  .get(conAppointment.getAppointments);
module.exports = router;
