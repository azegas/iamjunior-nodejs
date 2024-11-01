const { categories } = require('../../data/data');

function getCategories(req, res) {
  res.json(categories);
}

module.exports = {
  getCategories
}