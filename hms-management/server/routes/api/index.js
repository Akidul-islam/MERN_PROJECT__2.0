const router = require('express').Router();
// middlware
const authenticate = require('../../middleware/auth');
const protect = require('../../middleware/specifiUser');

// auth endpoint
router.use('/api/v1', require('./auth'));

// users endpoint
router.use('/api/v1/users', authenticate, require('./users'));
// patient Endpoint
router.use('/api/v1/patients', authenticate, require('./patient'));
// Doctor Endpoint
router.use('/api/v1/doctors', authenticate, require('./doctor'));
// router.use('/api/v1/admin',authenticate,require('./patient'))
router.use(
  '/api/v1/admin/dashborad',
  authenticate,
  protect.adminAuth,
  require('./admin')
);

// practice items

module.exports = router;
