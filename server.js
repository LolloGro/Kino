import express from "express";
import { loadMovie, loadMovies } from "./pages/js/loadData.js";

const app = express();
const PORT = 5080;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', async (req, res) => {
  const allMovies = await loadMovies();
  res.render('movies', { allMovies });
});

app.get('/movies/:id', async (req, res, next) => {
  const singleMovie = await loadMovie(req.params.id);
  res.render('movie', { singleMovie });
});

app.get('/aktuella', async (req, res) => {
  const allMovies = await loadMovies();
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

app.use('/static', express.static('./dist/assets'));
app.use('/static', express.static('./dist'));

app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
);
