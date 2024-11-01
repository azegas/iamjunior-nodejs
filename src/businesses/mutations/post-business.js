const { businesses } = require('../../data/data');

/*
{
    "name": "Fake Business Name",
    "description": "This is a fake business description.",
    "address": "123 Fake Street, Faketown, USA",
    "category": "Food",
    "contactPerson": "John Doe",
    "email": "john.doe@fakebusiness.com",
    "images": ["image1.jpg", "image2.jpg"]
}
*/

function postBusiness(req, res) {

    const { name, description, address, category, contactPerson, email, images } = req.body;

    // Check if all required fields are provided
    if (!name || !description || !address || !category || !contactPerson || !email || !images) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required: name, description, address, category, contactPerson, email, and images.'
        });
    }

    businesses.push({
        id: businesses.length + 1,
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        category: req.body.category,
        contactPerson: req.body.contactPerson,
        email: req.body.email,
        images: req.body.images
    });
    
    res.json({
        success: true,
        message: 'Business created successfully',
        business: businesses[businesses.length - 1]
    });
}

module.exports = {
    postBusiness
}