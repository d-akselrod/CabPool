'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();
const ref = firestore.collection('users')

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Checks if there is a username with the same password
    const snapshot = await ref.where('email', '==', email).where('password', '==', password).get();
    if (snapshot.empty) {
      throw new Error(false);
    }

    res.status(200).send({ valid: true });
    console.log('User logged in successfully')
  } catch (error) {
    console.error(error);
    res.status(401).send({ valid: false });
    console.log('Invalid email or password')
  }
};



module.exports = {
  login
}