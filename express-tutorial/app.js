const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

// Static assets
app.use(express.static("./methods-public"));

// Parse form data
app.use(express.urlencoded({ extended: false }));

// Parse Json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
