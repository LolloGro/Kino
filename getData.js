import fetch from "node-fetch";

const moviesAPI = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function loadMovies() {
  const response = await fetch(moviesAPI + '/movies');
  const movies = await response.json();
  return movies.data;
}

export async function loadMovie(id) {
  const response = await fetch(moviesAPI + '/movies/' + id);
  const movie = await response.json();
  return movie.data;
}