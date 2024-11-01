const express = require('express');

const { getBookings } = require('./queries/get-bookings-all');

const bookingsRouter = express.Router();

bookingsRouter.get('/', getBookings);

module.exports = {
  bookingsRouter,
}
