'use strict';

const { Food, db } = require('./../src/models');
const app = require('./../src/server');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await db.sync();
  await request.post('/food').send({
    foodName: 'TEST1',
  });
  await request.post('/food').send({
    foodName: 'TEST2',
  });
  await request.post('/food').send({
    foodName: 'TEST3',
  });
});

describe('Testing GET food routes', () => {
  test('Should read all food items', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  });

  test('Should read a single food item', async () => {
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body.foodName).toEqual('TEST1');
  });
});

describe('Testing POST food route', () => {
  test('Should create a single food item', async () => {
    const response = await request.post('/food').send({
      foodName: 'TEST',
    });
    expect(response.status).toEqual(200);
    expect(response.body.foodName).toEqual('TEST');
  });
});

describe('Testing PUT food route', () => {
  test('Should update a single food item', async () => {
    await request.put('/food/2').send({
      foodName: 'TEST UPDATE',
    });
    const response = await request.get('/food/2');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(2);
    expect(response.body.foodName).toEqual('TEST UPDATE');
  });
});

describe('Testing DELETE food route', () => {
  test('Should delete a single food item', async () => {
    await request.delete(`/food/3`);
    const foodRecord = await Food.findOne({ where: { id : 3}});
    expect(foodRecord).not.toBeTruthy();
  });
});

describe('Testing the error handling of server', () => {
  test('Should respond with a 404 for incorrect method', async () => {
    const response = await request.post('/what!?');
    expect(response.status).toEqual(404);
  });

  test('Should respond with a 404 for incorrect route', async () => {
    const response = await request.get('/nothing-here/');
    expect(response.status).toEqual(404);
  });

  test('Should respond with a 500 status because no body in POST request', async () => {
    const response = await request.post('/food');
    expect(response.status).toEqual(500);
  });
});