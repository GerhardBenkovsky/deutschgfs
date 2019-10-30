const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000, () => console.log("Listening at 3000"));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/");
  });
  
app.get("/:load/",(req,res) => {
  res.render('content', {load: req.params.load});
});