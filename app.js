const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Use cors middleware to allow cross-origin requests
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/newsletter-signup", indexRouter);

const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
