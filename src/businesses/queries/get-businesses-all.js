const { businesses } = require('../../data/data');

/*
http://localhost:3000/api/businesses
*/

function getBusinesses(req, res) {
  res.json(businesses);
}

module.exports = {
  getBusinesses
}
