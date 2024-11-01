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
    const { name, color, url } = req.body;
    if (!name || !color || !url) {
        return res.status(400).json({ success: false, message: 'Please provide name, color, and url.' });
    }
    categories.push({
        id: categories.length + 1,
        name,
        color,
        url
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