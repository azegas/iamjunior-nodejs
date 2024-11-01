const { businesses } = require('../../data/data');

function getBusinessById(req, res) {
  const businessId = req.params.id;
  const business = businesses.find(business => business.id === parseInt(businessId));
  if (business) {
    res.json(business);
  } else {
    res.status(404).json({ message: 'Business not found' });
  }
}

module.exports = {
  getBusinessById
}
