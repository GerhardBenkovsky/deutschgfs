const express = require("express");
const app = express();

app.listen(3000, () => console.log("Listening at 3000"));

app.use(express.static("public"));

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/views/");
  });

app.get("/content" ,(req,res) => {
  res.sendFile(__dirname + "/views/content/");
});

app.get ("/data", function(request,response) {
  response.parseJSON("/views/ data-test.JSON");
});