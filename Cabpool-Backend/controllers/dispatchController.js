'use strict';

const firebase = require('../db');
const Ride = require('../models/carpoolRide');
const firestore = firebase.firestore();
const ref_offer = firestore.collection('offers');
const ref_request = firestore.collection('requests');
const ref_ride = firestore.collection('rides');
const ref_taxi = firestore.collection('taxis');

const offerCarpool = async (req, res, next) => {
    try {
    const {userID, taxiID} = req.body;
    
    // Checks if the taxiId exists in the database
    const taxi_snapshot = await ref_taxi.where('id', '==', taxiID).get();
    if (taxi_snapshot.empty) {
      throw new Error(false);
    };
    const taxiDoc = taxi_snapshot.docs[0];
    const capacity = taxiDoc.get('capacity');

    // Changes the offer_mode in the ride database and takes the ride's document ID
    const query = ref_ride.where('taxiID', '==', taxiID).limit(1);
    const snapshot = await query.get();
    if (snapshot.empty) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    const userDoc = snapshot.docs[0];
    const rideID = userDoc.id;
    const offer_mode = true;
    await userDoc.ref.update({offer_mode});

    // Adds the retrieved document ID and taxiID to the the offers collection
    const offeringEmail = userID
    ref_offer.add({ offeringEmail, rideID });
    res.status(200).json({valid: true, rideID: rideID, seatCapacity: capacity});

} catch (error){
        console.error(error);
        res.status(401).json({valid: false});
        console.log('Invalid code for the taxiID')
    }
};

const requestCarpool = async (req, res, next) => {
};

const findCarpool = async (req, res, next) => {
};


module.exports = {
    offerCarpool, requestCarpool, findCarpool
}