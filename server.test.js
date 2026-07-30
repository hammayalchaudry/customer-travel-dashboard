const request = require('supertest');
const app = require('./server'); // Ensure server.js exports module.exports = app;

describe('Backend API Endpoints Tests', () => {

  // 1. GET Customers - Happy Path
  test('GET /api/customers - should return status 200 and array of customers', async () => {
    const res = await request(app).get('/api/customers');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  // 2. GET Single Customer - Happy Path
  test('GET /api/customers/:id - should return single customer data', async () => {
    const res = await request(app).get('/api/customers/CUST-101');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 'CUST-101');
  });

  // 3. GET Single Customer - Failure Case (Invalid ID)
  test('GET /api/customers/:id - should return 404 for non-existing customer', async () => {
    const res = await request(app).get('/api/customers/INVALID-999');
    expect(res.statusCode).toEqual(404);
  });

  // 4. POST New Customer - Happy Path
  test('POST /api/customers - should create new customer and return 201', async () => {
    const newCustomer = {
      name: 'Testing User',
      email: 'test@example.com'
    };
    const res = await request(app).post('/api/customers').send(newCustomer);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Testing User');
  });

  // 5. POST New Customer - Failure Case (Missing Required Fields)
  test('POST /api/customers - should return 400 error if name/email missing', async () => {
    const invalidCustomer = { phone: '12345' };
    const res = await request(app).post('/api/customers').send(invalidCustomer);
    expect(res.statusCode).toEqual(400);
  });

});