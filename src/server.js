const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const app = express();

const { categoriesRouter } = require('./categories');

// ----------------------------------------------------------------
// MIDDLEWARES 
// ----------------------------------------------------------------
app.use(express.static(path.join(__dirname, '../public')));

// middleware - custom middleware before processing requests
app.use((req, res, next) => {
    console.log('hello from custom middleware');
    next();
});

// middleware - parses(decrypts, decompresses) JSON bodies
app.use(express.json());

// middleware - logs request details
app.use(morgan('dev'));

// ----------------------------------------------------------------
// ROUTES
// ----------------------------------------------------------------

// middleware to handle the routes. here we define the route prefix
app.use('/api/categories', categoriesRouter);

// ----------------------------------------------------------------
// SERVER
// ----------------------------------------------------------------

app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on ${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`);
});
