'use strict';

const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

const FoodRoutes = require('./routes/food');

const send404 = require('./error-handlers/404');
const send500 = require('./error-handlers/500');

app.get('/', (request, response) => {
  response.status(200).send('My Server');
});


// food CRUD methods
app.get('/food', FoodRoutes.getFoodItems);
app.get('/food/one', validator, FoodRoutes.getFoodItem);
app.post('/food', validator, FoodRoutes.createFoodItem);
app.put('/food', validator, FoodRoutes.updateFoodItem);
app.delete('/food', validator, FoodRoutes.deleteFoodItem);

// error handling
app.get('*', send404);
app.use(send500);

module.exports = app;




