const router = require('express').Router()
const users = require('../../controller/auth')

// Register form
router.post('/register',users.register)

// Login form
router.post('/login',users.login)

module.exports = router;