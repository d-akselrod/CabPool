const express = require('express');
const {getTaxi} = require('../controllers/taxiController');

const router = express.Router();

// Gets the taxi's information
router.get('/taxi', getTaxi);


module.exports = {
  routes: router,
};
