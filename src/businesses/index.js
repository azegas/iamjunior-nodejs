const express = require('express');

const { getBusinesses } = require('./queries/get-businesses');
const { postBusiness } = require('./mutations/post-business');
const { getBusinessById } = require('./queries/get-business');

const businessesRouter = express.Router();

businessesRouter.get('/', getBusinesses);
businessesRouter.post('/', postBusiness);
businessesRouter.get('/:id', getBusinessById);

module.exports = {
  businessesRouter,
}