const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const brand = require("./src/brand/brand.json");

app.get("/brand", (req, res) => {
  return res.json(brand);
});

app.listen(port, () => {
  console.log("servidor esta rodando");
});
