'use strict';

const firebase = require('../db');
const Rating = require('../models/rating');
const firestore = firebase.firestore();
const ref = firestore.collection('ratings')
const user_ref = firestore.collection('users');

const submitRating  = async (req, res) => {
    try {
        // const {fromUser, rating, toUser} = req.body;
        //Updates the user's average rating
        // const snapshot = await user_ref.where("email", "==", toUser).get();
        // let avgRating = 0;
        // snapshot.forEach(doc => {
        // avgRating = doc.data().avgRating;
        // });


        // Adds the rating to the database
        await ref.add(data);
        res.status(200).json({valid: true});
    } catch (error) {
        console.error(error);
        res.status(401).json({valid: false});
    }
};

const requestRating = async (req, res) => {
    try {

      // Retrieves the user's rating and sends the user's rating
      const {email} = req.body;
      const snapshot = await user_ref.where('email', '==', email).get();
      if (snapshot.empty) {
        throw new Error(`Rating with ID ${email} not found`);
      }
      const userDoc = snapshot.docs[0];
      const avgRating = userDoc.get('avgRating');
      res.status(200).json({avgRating: avgRating});

    } catch (error) {
      console.error(false);
      res.status(404).json({valid: false});
    }
  };


module.exports = {
    requestRating, submitRating
};