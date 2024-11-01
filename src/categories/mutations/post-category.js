const { categories } = require('../../data/data');

/*
http://localhost:3000/api/categories

{
    "name": "labukas",
    "color": "pink",
    "url": "https://google.com"
}
*/

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