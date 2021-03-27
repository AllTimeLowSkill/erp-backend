const generic = require('./generic.controller')
const { Task } = require('../models')

module.exports = {
    ...generic(Task)
}