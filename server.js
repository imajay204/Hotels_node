const express = require("express");
const app = express();
const db = require("./db");
const Menu = require("./models/menu");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Welcome to my hotel .... how i can help you?, i have list of menu");
});

const personRoutes=require("./routes/personRoutes");
app.use('/person',personRoutes);

const menuRoutes=require("./routes/menuRoutes.js");
app.use('/menu',menuRoutes);
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
