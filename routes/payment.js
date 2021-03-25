const router = require('express-promise-router')()
const { Payment } = require('../controllers')


router.route('/').post(Payment.createPaymentIntent)


module.exports = router