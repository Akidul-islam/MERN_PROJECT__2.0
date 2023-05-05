const router = require("express").Router();
// middlware
const authenticate = require("../../middleware/auth");
const protectRouter = require("../../middleware/specifiUser");

// auth endpoint
router.use("/api/v1", require("./auth"));

// users endpoint
router.use("/api/v1/users", authenticate, require("./users"));
// patient Endpoint
router.use("/api/v1/patients", authenticate, require("./patient"));
// Doctor Endpoint
router.use("/api/v1/doctors", authenticate, require("./doctor"));
// appointment endPoint
router.use("/api/v1/appointments", authenticate, require("./appointment"));
// doctor gigs
router.use("/api/v1/gigs", require("./doctorGigs"));
router.use("/api/v1/admin", authenticate, require("./admin"));
// router.use('/api/v1/admin',authenticate,require('./patient'))

// practice items

module.exports = router;
