const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo à API do meu projeto!");
});

app.listen(3000, () => {
  console.log("A API está funcionando na porta 3000.");
});
