const express = require('express');
const { requestRating, submitRating } = require('../controllers/RatingsController');


const router = express.Router();

// Submits a rating
router.post('/submit', submitRating);

// Requests a rating
router.get('/request', requestRating);



module.exports = {
  routes: router,
};
