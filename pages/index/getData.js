import fetch from "node-fetch";

const moviesAPI = "https://plankton-app-xhkom.ondigitalocean.app/api/movies";

export async function loadMovies() {
  const response = await fetch(moviesAPI);
  const movies = await response.json();
  return movies;
}

export async function loadMoive(id) {
  const response = await fetch(moviesAPI + id);
  const movie = response.json();
  return movie;
}