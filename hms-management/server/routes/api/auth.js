const router = require('express').Router();
const auth = require('../../controller/auth');

// Register form
router.post('/register', auth.register);

// Login form
router.post('/login', auth.login);

module.exports = router;
