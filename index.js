const express = require('express');
const app = express();
const fs = require('fs');

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(3000, () => console.log("Listening at 3000"));

app.get("/", (req, res) => {
  let data = fs.readFileSync('data-test.json');
  console.log(data);
  res.render('index', {data: data});
  });

app.get("/:load/",(req,res) => {
  res.render('content', {load: req.params.load});
});
