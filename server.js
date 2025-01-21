import startApp from "./app.js";

const app = startApp();

const PORT = 5080;

app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
);
