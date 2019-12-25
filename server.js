const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));
cd;
app.listen(5000, () => console.log("Listening at 5000"));

app.get("/getdata/:id", (req, res) => {
  let data = JSON.parse(fs.readFileSync("data-test.json"));
  let answer = [];
  if (req.params.id === "all") {
    res.json(data);
    return;
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === req.params.id) {
      answer.push(data[i]);
    }
  }
  if (answer.length === 0) {
    res.json({ error: "none" });
    return;
  }
  res.json(answer);
});
