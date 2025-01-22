import { expect, test } from '@jest/globals';
import startApp from '../app.js';
import request from 'supertest';
import { loadMovie, loadMovies } from '../pages/js/loadData.js';

const appMovie = startApp({ loadMovie, loadMovies });

test('Server response on resquest for loadMovies', async () => {

  const response = await request(appMovie)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200);
});

test('Server response on request for loadmovie', async () => {

  const response = await request(appMovie)
    .get('/movies/2')
    .expect('content-Type', /html/)
    .expect(200);
});