const express = require('express');
const { calculatePayments } = require('../controllers/paymentController');

const router = express.Router();

router.post('/calculate', calculatePayments);

module.exports = {
  routes: router,
};
