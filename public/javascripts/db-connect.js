const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Connect to the MongoDB database
const db = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
