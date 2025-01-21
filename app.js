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

  app.get('/movies/:id', async (req, res, next) => {
    const singleMovie = await api.loadMovie(req.params.id);
    if (singleMovie == null) {
      console.log("error");
      res.render('noMovie');
    } else {
      const mark = marked.parse(singleMovie.attributes.intro);
      singleMovie.attributes.intro = mark;
      //GET = 500 Internal Server Error

      console.log(singleMovie);
      res.render('movie', { singleMovie });
    }
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
