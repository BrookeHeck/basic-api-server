'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';
const foodSchema = require('./food');

let sequelize = new Sequelize(DATABASE_URL);

let FoodModel = foodSchema(sequelize, DataTypes);

module.exports = {
  Food: FoodModel,
  db: sequelize,
};