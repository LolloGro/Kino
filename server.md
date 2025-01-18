import express from "express";
import { loadMovie, loadMovies } from "./pages/js/loadData.js";
//import expressLayouts from "express";


const app = express();
const PORT = 5080;
//app.engine('handlebars', engine());
app.set('view engine', 'ejs');
//app.use(expressLayouts);
//app.set('layout', './layouts');

//app.set('views', './views')

app.get('/', (req, res) => {

  res.render('movies.ejs');
});

/* app.get('/', async (req, res) => {
  const allMovies = await loadMovies();
  res.render('movies.ejs', { allMovies });
}); */

/* app.get('/movies/:id', async (req, res) => {
  const singleMovie = await loadMovie(req.params.id);
  if (singleMovie == null) {
    res.render('noMovie');
  } else {
    res.render('movie', { singleMovie });
  }
});

app.get('/kids', async (req, res) => {
  res.render('kids');
});

app.get('/about', async (req, res) => {
  res.render('about');
});

app.get('/kommande', async (req, res) => {
  res.render('index');
});
app.get('/coming', async (req, res) => {
  res.render('coming');
}); */

app.use('/static', express.static('./dist/assets'));
app.use('/static', express.static('./dist'));

/* app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
);  */
