const router = require('express-promise-router')()
const { Sale } = require('../controllers')

router.route('/').get(Sale.getAll)
router.route('/:id').get(Sale.getOne)
router.route('/').post(Sale.create)

module.exports = router