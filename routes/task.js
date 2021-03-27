const { Task } = require('../controllers')
const router = require('express-promise-router')()

router.route('/').get(Task.getAll)
router.route('/:id').get(Task.getOne)
router.route('/').post(Task.create)
router.route('/:id').put(Task.update)
router.route('/:id').delete(Task.delete)

module.exports = router