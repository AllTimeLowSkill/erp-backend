const generic = require('./generic.controller')
const { Category } = require('../models')

module.exports = {
    ...generic(Category)
}