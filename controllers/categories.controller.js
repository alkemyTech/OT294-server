const { Category } = require('../models/index');

const updateCategory = async (id, categoryInfo) => {
    return await Category.update(categoryInfo, { where: { id } })
}

module.exports = {
    updateCategory
}