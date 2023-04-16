//'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();
const ref = firestore.collection('users')

const register = async (req, res) => {
    try {
      const user = req.body;
  
      // Checks if the user already exists in the database
      const snapshot = await ref.where('email', '==', user.email).get();
      if (!snapshot.empty) {
        throw new Error(`User with email ${user.email} already exists`);
      }
  
      // Adds the new user to the database
      user["avgRating"] = 0;
      user["tripNum"] = 0
      await ref.add(user);
      res.status(200).send({valid: true});
      console.log('user added successfully');
    } catch (error) {
      console.error(error);
      res.status(400).json({valid: false});
    }
  };


module.exports = {
    register
}