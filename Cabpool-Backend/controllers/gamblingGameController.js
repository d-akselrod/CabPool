'use strict';

const firebase = require('../db');
const Ride = require('../models/carpoolRide');
const firestore = firebase.firestore();
const ref = firestore.collection('rides')

const playGame = async (req, res, next) => {
    try{
        //extract the riders from the request 
        const user = req.body;
        const headsOrTails = Math.floor(Math.random() * 2);
        
        //Determine winner
        if(headsOrTails == 1){
            //challenger wins
            //Send response
            res.status(200).send({win: true});
        }else{
            //Send response
            res.status(200).send({win: false});
        }
    }catch(error){
        res.status(400).send({valid: false});
    }
    
};

// const startGame = async (req, res, next) => {
// };

// const initGame = async (req, res, next) => {
// };

// const awardPrizes = async (req, res, next) => {
// };


module.exports = {
    playGame
}