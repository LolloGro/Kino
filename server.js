import express from "express";
import fs from 'fs/promises';

const app = express();

app.use("/Test-Kino-deploy/", express.static("dist"));
app.use(express.static("dist"));

async function renderPage(res, page) {
  const buf = await fs.readFile(`./dist/${page}.html`);
  const html = buf.toString();

  const templateBuf = await fs.readFile("./templates/main.html");
  const templateHtml = templateBuf.toString();

  const outHtml = templateHtml.replace("%&BODY&%", html);

  res.send(outHtml);
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

app.listen(3080); 
