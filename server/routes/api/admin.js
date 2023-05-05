const adminController = require("../../controller/admin");
const router = require("express").Router();
router
  .route("/:adminId")
  .get(adminController.getAdmin)
  .patch(adminController.patchAdminUpdate);

router.route("/").get(adminController.getAdmins);

module.exports = router;
