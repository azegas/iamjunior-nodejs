const { businesses } = require('../../data/data');

/*
http://localhost:3000/api/businesses/1

{
    "name": "New Name",
    "description": "New Description",
    "address": "New Address",
    "category": "New Category",
    "contactPerson": "New Contact Person",
    "email": "new.email@business.com",
    "images": ["new-image1.jpg", "new-image2.jpg"]
}
*/

function putBusiness(req, res) {
    const businessId = req.params.id;
    const business = businesses.find(business => business.id === parseInt(businessId));

    if (!business) {
        return res.status(404).json({ message: 'Business with such id does not exist' });
    }

    const { name, description, address, category, contactPerson, email, images } = req.body;

    // Check if any of the fields are provided
    if (!name && !description && !address && !category && !contactPerson && !email && !images) {
        return res.status(400).json({ message: 'Please provide at least one of the fields to update' });
    }

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
