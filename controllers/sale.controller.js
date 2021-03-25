const generic = require('./generic.controller')
const { Sale } = require('../models')

module.exports = {
    ...generic(Sale)
}