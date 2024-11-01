const { categories } = require('../../data/data');

function createCategory(req, res) {
  const newId = categories.length + 1;
  categories.push({ id: newId, name: 'hi' });

  res.json({
    success: true,
    message: 'Category added successfully',
    categoryId: newId
  })
}

module.exports = {
  createCategory
}