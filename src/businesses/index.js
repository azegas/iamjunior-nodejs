const express = require('express');

const { getBusinesses } = require('./queries/get-businesses');
const { postBusiness } = require('./mutations/post-business');
const { getBusinessById } = require('./queries/get-business');
const { getBusinessByCategory } = require('./queries/get-business-by-category');
const { putBusiness } = require('./mutations/put-business');
const businessesRouter = express.Router();

businessesRouter.get('/', getBusinesses);
businessesRouter.post('/', postBusiness);
businessesRouter.get('/:id', getBusinessById);
businessesRouter.get('/category/:category', getBusinessByCategory);
businessesRouter.put('/:id', putBusiness);

module.exports = {
  businessesRouter,
}