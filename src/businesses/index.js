const express = require('express');

const { getBusinesses } = require('./queries/get-businesses');
const { postBusiness } = require('./mutations/post-business');

const businessesRouter = express.Router();

businessesRouter.get('/', getBusinesses);
businessesRouter.post('/', postBusiness);

module.exports = {
  businessesRouter,
}