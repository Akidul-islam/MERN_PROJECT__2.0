const router = require('express').Router()
// middlware
const authenticate = require('../../middleware/auth')

// auth endpoint
router.use('/api/v1',require('./auth'))

// users endpoint
router.use('/api/v1/users',authenticate, require('./users'))
// patient Endpoint
router.use('/api/v1/patients',authenticate,require('./patient'))
// Doctor Endpoint
router.use('/api/v1/doctors',authenticate,require('./patient'))

// practice items

module.exports = router 