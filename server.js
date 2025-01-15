import express from "express";
import { engine } from "express-handlebars";
import { loadMovie, loadMovies } from "./getData.js";

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates')

app.get('/', async (req, res) => {
  const allMovies = await loadMovies();
  res.render('movies', { allMovies });
});

app.get('/about', async (req, res) => {
  res.render('about');
});

app.get('/kids', async (req, res) => {
  res.render('kids');
});

app.get('/movies', async (req, res) => {
  res.render('index');
});

app.get('/movies/:id', async (req, res) => {
  const singleMovie = await loadMovie(req.params.id);
  res.render('movie', { singleMovie });
});

app.use('/dist', express.static('dist'));
app.use('/', express.static('dist'));
app.use('/movies/dist', express.static('dist'));

app.listen(5080); 
