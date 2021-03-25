const generic = require('./generic.controller')
const { Product } = require('../models')

module.exports = {
    ...generic(Product)
}