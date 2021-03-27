const { Column } = require('../controllers')
const router = require('express-promise-router')()

router.route('/').get(Column.getAll)
router.route('/').post(Column.create)
router.route('/:id').delete(Column.delete)

module.exports = router