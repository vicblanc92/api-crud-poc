import app from '../src/app';
import request from 'supertest';

describe('GET /users', () => {
  test('should respond with an array', async () => {
    const response = await request(app).get('/users').send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('POST /users', () => {
  describe('Add new user', () => {
    const user = {
      name: 'Stuart',
      surname: '',
      email: '',
      birthdate: '',
    };
    // test('should respond with an object', async () => {
    //   const response = await request(app).post('/users').send();
    //   expect(response.user).toContainEqual('');
    // });
    test('should respond with a 200 status code', async () => {
      const response = await request(app).post('/users').send(user);
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('DELETE /:id', () => {
  test('should respond with a 204 status code', async () => {
    const response = await request(app).delete('/users/12').send();
    expect(response.statusCode).toBe(204);
  });
});

describe('PATCH /:id', () => {
  test('should respond with an object', async () => {
    const response = await request(app).patch('/users/11').send();
    expect(response.body).toBeInstanceOf(Object);
  });
});
