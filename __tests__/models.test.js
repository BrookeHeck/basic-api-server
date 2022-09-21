'use strict';

const { Food, db } = require('../src/models');

beforeAll(async () => {
  await db.sync();
});

describe('Testing our data models', () => {
  test('Should create a single food item', async () => {
    let food = await Food.create({
      name: 'FOOD TEST',
    });
    expect(food.id).toBeTruthy();
    expect(food.name).toEqual('FOOD TEST');
  });
});

describe('Testing reading from food table', () => {
  test('Should return all food from table', async () => {
    let foodItems = await Food.findAll();
    console.log(foodItems);
    expect(foodItems.length).toBeTruthy();
  });
});