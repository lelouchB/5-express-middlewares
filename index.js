
const express = require("express");
const morgan = require("morgan")
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
var favicon = require('serve-favicon')
var path = require('path')


const limiter = rateLimit({
    windowMs: 15 *60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many accounts created from this IP, please try again after a minute"
  });

const app = express();

// Serve Favicon
app.use(favicon('favicon.ico'))

// Middlewares
app.use(morgan("common"))
app.use(helmet());
app.use(cors())
app.use(limiter); //  apply to all requests


// Port
const port = 3000;


app.get("/", (req, res) => {
  res.json({
    message: "Hello Stranger! How are you?",
  });
});

// Listen
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});