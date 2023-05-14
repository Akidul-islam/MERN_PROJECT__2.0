const controller = require('../../controller/auth');
const user = require('../../controller/users');
const router = require('express').Router();

router.route('/newuser').post(controller.register);
router.route('/overview').get(user.getOverview);
router.route('/patients').get(user.getPatients);
router.route('/doctors').get(user.getDoctors);
// router.route('/overview').get(user.getOverview);

module.exports = router;
