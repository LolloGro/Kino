import express from "express";
import { loadMovie, loadMovies } from "./pages/js/loadData.js";
import { marked } from "marked";

function startApp(api) {
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', 'views');

  app.get('/', async (req, res) => {
    const allMovies = await api.loadMovies();
    res.render('movies', { allMovies });
  });

  app.get('/movies/:id', async (req, res) => {
    const singleMovie = await api.loadMovie(req.params.id);

    if (singleMovie === null) {
      res.status(404);
      res.render('noMovie', { text: "No page found" });
      console.log("HTTP-status", res.statusCode);
      return;
    }
    if (singleMovie.attributes.intro) {
      const mark = marked.parse(singleMovie.attributes.intro);
      singleMovie.attributes.intro = mark;
    }

    res.render('movie', { singleMovie });
  });

  app.get('/aktuella', async (req, res) => {
    const allMovies = await api.loadMovies();
    res.render('movies', { allMovies })
  })

  app.get('/kommande', async (req, res) => {
    res.render('index');
  });

  app.get('/kids', async (req, res) => {
    res.render('kids');
  });

  app.get('/about', async (req, res) => {
    res.render('about');
  });

  app.get('/coming', async (req, res) => {
    res.render('coming');
  });

  app.use('/static', express.static('./dist'));

  return app;
}

export default startApp; 
