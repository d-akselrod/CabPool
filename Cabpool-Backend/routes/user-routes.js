const express = require('express');
const { register } = require('../controllers/registrationController');
const { login } = require('../controllers/loginController');
const { updateProfile } = require('../controllers/profileController');

const router = express.Router();

// register
router.post('/register', register);

// login
 router.post('/login', login);

 //edit profile
 router.post('/edit', updateProfile)

module.exports = {
  routes: router,
};
