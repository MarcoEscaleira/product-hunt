const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Start app
const app = express();
app.use(express.json());

// Start DB
mongoose.connect("mongodb://localhost:27017/product-hunt", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true
});

// Importing models
requireDir("./src/models/");

// Routes
app.use("/", require("./src/routes"));

app.listen(3001);