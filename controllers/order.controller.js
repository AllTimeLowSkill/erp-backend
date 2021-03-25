require('dotenv').config()
const boom = require('boom')
const stripe = require('stripe')(process.env.SECRET_STRIPE)

const createPaymentIntent = async ({ body: { amount } }, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 0.75,
            currency: 'usd',
            payment_method_types: ['card']
        })

        return res.status(200).send(paymentIntent)
    } catch (error) {
        return res.status(500).send(boom.boomify(error))
    }
}


module.exports = {
    createPaymentIntent
}