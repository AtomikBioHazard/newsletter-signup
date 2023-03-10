const express = require("express");
const router = express.Router();
require("../public/javascripts/db-connect");
const User = require("../public/javascripts/models").User;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Handle POST requests to the /newsletter-signup endpoint
router.post("/newsletter-signup", (req, res) => {
  const email = req.body.email;

  // Create a new User document with the received email and save it to the database
  const newUser = new User({ email });
  newUser
    .save()
    .then(() => {
      console.log(`Saved new user with email: ${email}`);

      // Redirect the user to the homepage
      res.status(200).redirect("/?success=true");
    })
    .catch((error) => {
      console.error(`Error saving user to database: ${error.message}`);

      // Send a response indicating failure
      res
        .status(500)
        .send("Failed to sign up for newsletter. Please try again later.");
    });
});

module.exports = router;
