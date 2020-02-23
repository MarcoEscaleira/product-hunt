const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Start app
const app = express();
app.use(express.json());

// Start DB
const mongodbPort = 27017;
const dbName = "product-hunt";
try {
  mongoose.connect(`mongodb://localhost:${mongodbPort}/${dbName}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
  }); 
} catch(error) {
  console.log(`Couldn't connect to the database. Please check if you have mongodb opened or port is correct (${mongodbPort})`, error);
}

// Importing models
requireDir("./src/models/");

// Routes
app.use("/", require("./src/routes"));

app.listen(3001);