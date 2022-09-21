'use strict';

const foodSchema = (sequelize, DataTypes) => sequelize.define(
  'Food', // this is the name of the table
  { // the object keys define the row and the value defines what must go in that row
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

module.exports = foodSchema;