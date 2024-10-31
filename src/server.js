const express = require("express");
const path = require("path");

const app = express();

// viska ka gaunu is uzklausos siuntejo - gausiu per req parametra
// viska ka siusiu atgal - galiu irasyti i res parametra
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
