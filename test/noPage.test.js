import { expect, test } from '@jest/globals';
import startApp from '../app.js';
import request from 'supertest';
import { loadMovie, loadMovies } from '../pages/js/loadData.js';

const api = {
  loadMovie,
  loadMovies
}

const app = startApp(api);

test('no page found', async () => {

  const response = await request(app)
    .get('/movies/1450')
    .expect(404);
});