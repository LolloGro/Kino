import startApp from "./app.js";
import { loadMovie, loadMovies } from "./pages/js/loadData.js";

const api = {
  loadMovie,
  loadMovies
}

const app = startApp(api);

const PORT = 5080;

app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
);
