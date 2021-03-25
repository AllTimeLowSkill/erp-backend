const { model, Schema } = require('mongoose')

const schema = new Schema({
    total: {
        type: Number,
        default: 0
    },
    countProduct: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Sale', schema)