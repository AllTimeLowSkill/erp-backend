const { model, Schema } = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        default: '',
        unique: true
    },

    tasks: {
        type: Schema.Types.ObjectId,
        ref: 'task'
    }
})

module.exports = model('Column', schema)