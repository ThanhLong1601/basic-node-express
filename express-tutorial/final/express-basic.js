const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("user is loading page");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1> Resourse not found </h1>");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});

//  Note :
// - app.get
// - app.post
// - app.put
// - app.delete
// - app.use
// - app.all
