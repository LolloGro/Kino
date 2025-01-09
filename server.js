import express from "express";
import fs from 'fs/promises';

const app = express();

//Skapar en rout som ska reagera när en klient gör en GET request
app.get("/", async (req, res) => {
  const buf = await fs.readFile("index.html");
  const html = buf.toString();
  res.send(html);
});

app.use("/", express.static("./"));



app.get('/:name', async (req, res) => {
  const buf = await fs.readFile("index.html");
  const html = buf.toString();
  const name = req.params.name;
  const ny = html.replace('okänd', name);

  res.send(ny);
})

app.listen(3080); 
