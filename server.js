import express from "express";
import fs from 'fs/promises';

const app = express();

app.use(express.static('dist'));

app.get('/', async (req, res) => {
  const buf = await fs.readFile("./dist/index.html");
  const html = buf.toString();
  res.send(html);
});

app.listen(3080); 
