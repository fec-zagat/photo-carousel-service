const request = require('supertest');
const app = require('../server/index');

describe('GET /id', () => {
  it('respond with single json with corresponding id', (done) => {
    request(app)
      .get('/id')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
