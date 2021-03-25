const router = require('express-promise-router')()
const { Product } = require('../controllers')

router.route('/:id').get(Product.getOne)
router.route('/').get(Product.getAll)
router.route('/').post(Product.create)
router.route('/:id').put(Product.update)
router.route('/:id').delete(Product.delete)

module.exports = router