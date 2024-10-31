const { categories } = require('../mock-categories');

function postCategory(req, res) {
    // body, during request is encrypted and compressed, that's why we can not see it
    console.log(req.body);

    // logika, pridedam nauja kategorija i masyva
    categories.push({
        id: categories.length + 1,
        name: req.body.name
    });
    
    // atsakymas klientui
    res.json({
        success: true,
        message: 'Category created successfully',
        category: categories[categories.length - 1]
    });
}

module.exports = {
    postCategory
}