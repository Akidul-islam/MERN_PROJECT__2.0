const router = require('express').Router()
// middlware
const authenticate = require('../../middleware/auth')

// auth endpoint
router.use('/api/v1',require('./auth'))

// users endpoint
router.use('/api/v1/users',authenticate, require('./users'))

router.use('/api/v1/patients',require('./patient'))

// practice items

module.exports = router 