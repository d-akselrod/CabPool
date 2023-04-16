'use strict';

const firebase = require('../db');
const Taxi = require('../models/taxi');
const firestore = firebase.firestore();
const ref = firestore.collection('taxis')

const getTaxi = async (req, res, next) => {
};

module.exports = {
    getTaxi
}