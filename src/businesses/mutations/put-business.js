const { businesses } = require('../../data/data');

function putBusiness(req, res) {
    const businessId = req.params.id;
    const business = businesses.find(business => business.id === parseInt(businessId));

    if (!business) {
        return res.status(404).json({ message: 'Business with such id does not exist' });
    }

    const { name, description, address, category, contactPerson, email, images } = req.body;

    // Updates the business name if a new name is provided, otherwise keeps the existing name
    business.name = name || business.name;
    business.description = description || business.description;
    business.address = address || business.address;
    business.category = category || business.category;
    business.contactPerson = contactPerson || business.contactPerson;
    business.email = email || business.email;
    business.images = images || business.images;

    res.json({ message: 'Business updated', business });
}

module.exports = {
    putBusiness
}
