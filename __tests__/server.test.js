'use strict';

const app = require('./../src/server');
const supertest = require('supertest');

const request = supertest(app);

describe('Testing GET food routes', () => {
  test('Should read all food items', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  });

  test('Should read a single food item', async () => {
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body.foodName).toEqual('test');
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
      foodName: 'TEST',
    });
    const response = await request.get('/food/2');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(2);
    expect(response.body.foodName).toEqual('TEST');
  });
});

describe('Testing DELETE food route', () => {
  test('Should delete a single food item', async () => {
    const createResponse = await request.post('/food').send({
      foodName: 'TEST',
    });
    await request.delete(`/food/${createResponse.body.id}`);
    const response = await request.get(`/food/${createResponse.body.id}`);
    expect(response.status).toEqual(200);
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