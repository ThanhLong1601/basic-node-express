const express = require("express");
const path = require("path");

const app = express();

// Setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// adding to static assets
// SSR
// });

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
