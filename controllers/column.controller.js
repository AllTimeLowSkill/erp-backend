const generic = require('./generic.controller')
const { Column } = require('../models')

module.exports = {
    ...generic(Column)
}