const { businesses } = require('../../data/data');

function getBusinessByCategory(req, res) {
  const category = req.params.category;
  const business = businesses.filter(business => business.category.toLowerCase() === category.toLowerCase());
  if (business.length > 0) {
    res.json(business);
  } else {
    res.status(404).json({ message: 'Business with such category does not exist' });
  }
}

module.exports = {
  getBusinessByCategory
}
