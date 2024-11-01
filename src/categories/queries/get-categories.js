const { categories } = require('../../data/data');

/*
http://localhost:3000/api/categories
*/

function getCategories(req, res) {
  res.json(categories);
}

module.exports = {
  getCategories
}