const router = require('express-promise-router')()
const { User } = require('../controllers')

router.route('/').post(User.login)
router.route('/signup').post(User.signup)

module.exports = router