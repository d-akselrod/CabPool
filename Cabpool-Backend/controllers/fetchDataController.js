const CarpoolOffer = require("../models/carpoolOffer");
const CarpoolRequest = require("../models/carpoolRequest");
const CarpoolRide = require("../models/carpoolRide");
const Rating = require("../models/rating");
const Taxi = require("../models/taxi");
const User = require("../models/user");

const getAllOffers = async (req, res, next) => {
  try {
    const offers = await firestore.collection('offers');
    const data = await offers.get();
    const itemsArray = [];
    if (data.empty) {
      res.status(400).send('No offer record found');
    } else {
      data.forEach((doc) => {
        const item = new CarpoolOffer(
          doc.id,
          doc.data().id,
          doc.data().offeringUser,
          doc.data().rideID,
        );
        itemsArray.push(item);
      });
      res.send(itemsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllRequests = async (req, res, next) => {
  try {
    const requests = await firestore.collection('requests');
    const data = await requests.get();
    const itemsArray = [];
    if (data.empty) {
      res.status(400).send('No request record found');
    } else {
      data.forEach((doc) => {
        const item = new CarpoolRequest(
          doc.id,
          doc.data().id,
          doc.data().requestingUser,
          doc.data().destination,
        );
        itemsArray.push(item);
      });
      res.send(itemsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
   }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await firestore.collection('users');
    const data = await users.get();
    const itemsArray = [];
    if (data.empty) {
      res.status(400).send('No user record found');
    } else {
      data.forEach((doc) => {
        const item = new User(
          doc.id,
          doc.data().id,
          doc.data().username,
          doc.data().password,
          doc.data().firstName,
          doc.data().lastName,
        );
        itemsArray.push(item);
      });
      res.send(itemsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllRides = async (req, res, next) => {
  try {
    const rides = await firestore.collection('rides');
    const data = await rides.get();
    const itemsArray = [];
    if (data.empty) {
      res.status(400).send('No ride record found');
    } else {
      data.forEach((doc) => {
        const item = new CarpoolRide(
          doc.id,
          doc.data().id,
          doc.data().position,
          doc.data().start,
          doc.data().end,
          doc.data().stops,
          doc.data().riders,
          doc.data().taxiID,
        );
        itemsArray.push(item);
      });
      res.send(itemsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllRatings = async (req, res, next) => {
  try {
    const ratings = await firestore.collection('ratings');
    const data = await ratings.get();
    const itemsArray = [];
    if (data.empty) {
      res.status(400).send('No rating record found');
    } else {
      data.forEach((doc) => {
        const item = new Rating(
          doc.id,
          doc.data().id,
          doc.data().fromUser,
          doc.data().toUser,
          doc.data().rating,
        );
        itemsArray.push(item);
      });
      res.send(itemsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllTaxis = async (req, res, next) => {
    try {
      const taxis = await firestore.collection('taxis');
      const data = await taxis.get();
      const itemsArray = [];
      if (data.empty) {
        res.status(400).send('No taxi record found');
      } else {
        data.forEach((doc) => {
          const item = new Taxi(
            doc.id,
            doc.data().id,
            doc.data().capacity,
          );
          itemsArray.push(item);
        });
        res.send(itemsArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

module.exports = {
  getAllOffers, getAllRequests, getAllUsers, getAllRides, getAllRatings, getAllTaxis
};