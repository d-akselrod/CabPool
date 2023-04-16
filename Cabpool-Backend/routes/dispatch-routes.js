const express = require('express');
const { offerCarpool, requestCarpool, findCarpool } = require('../controllers/dispatchController');


const router = express.Router();

// Offer Carpool
router.get('/offer', offerCarpool);

// Request Carpool
router.post('/request', requestCarpool);

// Select a Carpool
router.post('/find', findCarpool);



module.exports = {
  routes: router,
};
