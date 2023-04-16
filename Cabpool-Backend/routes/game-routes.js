const express = require('express');
const { initGame, startGame, playGame, awardPrizes } = require('../controllers/gamblingGameController');


const router = express.Router();

// initializes the challenge
// router.post('/init', initGame);

// // starts the game
// router.post('/start', startGame);

// plays the game
router.post('/play', playGame);

// // shows the awards
// router.post('/awards', awardPrizes);


module.exports = {
  routes: router,
};
