const { model, Schema } = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        default: ''
    },

    description: {
        type: String,
        default: ''
    },

    products: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
})

module.exports = model('Categoty', schema)