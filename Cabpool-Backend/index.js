'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const user = require('./routes/user-routes');
const rating = require('./routes/rating-routes');
const game = require('./routes/game-routes');
const dispatch = require('./routes/dispatch-routes');
const payment = require('./routes/payment-routes');
const taxi = require('./routes/taxi-routes');




const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/user', user.routes);
app.use('/rating', rating.routes);
app.use('/game', game.routes);
app.use('/dispatch', dispatch.routes);
app.use('./ride', taxi.routes);


app.listen(config.port, () =>
  console.log(`Server started on url ${config.url}`)
);
