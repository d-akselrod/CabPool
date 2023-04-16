'use strict';

const firebase = require('../db');
const Ride = require('../models/carpoolRide');
const firestore = firebase.firestore();
const ref = firestore.collection('user')

const fetchDetails = async (req, res, next) => {
    
}

const updateProfile = async (req, res, next) => {
};

module.exports = {
    updateProfile
}