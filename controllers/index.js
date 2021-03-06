const Product = require('./product.controller')
const Category = require('./category.controller')
const User = require('./auth.controller')
const Sale = require('./sale.controller')
const Payment = require('./order.controller')
const Task = require('./task.controller')
const Column = require('./column.controller')

module.exports = {
    Product,
    Category,
    User,
    Sale,
    Payment,
    Task,
    Column
}