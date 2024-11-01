const { categories } = require('../mock-categories');

function postCategory(req, res) {
    categories.push({
        id: categories.length + 1,
        name: req.body.name,
        color: req.body.color,
        url: req.body.url
    });
    
    res.json({
        success: true,
        message: 'Category created successfully',
        category: categories[categories.length - 1]
    });
}

module.exports = {
    postCategory
}