const { businesses } = require('../../data/data');

function getBusinesses(req, res) {
  res.json(businesses);
}

module.exports = {
  getBusinesses
}
