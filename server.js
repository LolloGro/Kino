import express from "express";
import { engine } from "express-handlebars";
import fs from 'fs/promises';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates')

app.use("/dist", express.static("dist"));
app.use("/", express.static("dist"));

async function renderPage(res, page) {
  res.render(page);
}

app.get("/", (req, res) => {
  renderPage(res, "index");
});

app.get("/about", async (req, res) => {
  renderPage(res, "about");
});

app.get("/kids", async (req, res) => {
  renderPage(res, "kids");
});

app.get("/test", async (req, res) => {
  res.send(console.log(allMvoies));
});

app.listen(5080); 
