const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res
// app.use([logger, authorize]);
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Product");
});

app.get("/api/items", (req, res) => {
  res.send("Item");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
