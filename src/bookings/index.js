const express = require('express');

const { getBookings } = require('./queries/get-bookings-all');
const { getBookingsByIdAndEmail } = require('./queries/get-bookings-by-id-and-email');
const { postBooking } = require('./mutations/post-booking');
const bookingsRouter = express.Router();

bookingsRouter.get('/', getBookings);
bookingsRouter.get('/:businessId/email/:email', getBookingsByIdAndEmail);
bookingsRouter.post('/', postBooking);

module.exports = {
  bookingsRouter,
}
