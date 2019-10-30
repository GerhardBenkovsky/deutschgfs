const express = require("express");
const app = express();

app.listen(3000, () => console.log("Listening at 3000"));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/");
  });

app.get("/:id",(req,res) => {
  res.send("<link rel='stylesheet' href='style.css'> \n<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' type='text/javascript'></script>     \n<script src='main.js' type='text/javascript'></script>        \n<script src='contentloader.js' type='text/javascript'></script>                \n<script type='text/javascript'> contentLoader('"+ req.params.id.toString() +"') </script>");
});