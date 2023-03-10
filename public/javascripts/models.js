const mongoose = require("mongoose");

// Define a User schema for the database
const User = mongoose.model("User", { email: String });

exports.User = User;
