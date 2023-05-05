const gigsController = require("../../controller/doctorGigs");
const router = require("express").Router();
const authenticate = require("../../middleware/auth");
const upload = require("../../middleware/fileUpload");

// patient prefixing routes

router
  .route("/")
  .post(authenticate, upload.single("Image"), gigsController.createGigs)
  .get(gigsController.getGig);

module.exports = router;
