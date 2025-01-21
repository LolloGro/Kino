import { expect, jest, test } from '@jest/globals';
import startApp from '../app.js';
import request from 'supertest';

const app = startApp();

test('Movies is displayed in list on homepage', async () => {
  const response = await request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200);

  expect(response.text).toMatch('Encanto');
  expect(response.text).toMatch('The Muppets');
  expect(response.text).toMatch('Min granne Totoro');
  expect(response.text).toMatch('Forrest Gump');
});

test('Choosen movie is displayed on homepage', async () => {
  const response = await request(app)
    .get('/movies/2')
    .expect('content-Type', /html/)
    .expect(200);

  expect(response.text).toMatch('Encanto');
});