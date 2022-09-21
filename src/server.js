'use strict';

const express = require('express');
const cors = require('cors');
const { Food } = require('./models');

const app = express();
app.use(cors());

app.get('/', (request, response) => {
  response.status(200).send('My Server');
});

app.post('/food', async (request, response) => {
  let foodData = request.body;

});


// error handling


module.exports = app;




