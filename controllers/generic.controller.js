const boom = require('boom')

const generic = (model) => ({
    async getOne({ params: { id } }, res){
        try {
            const item = await model.findById(id)
            if(!item){
                return res.status(403).send({ message: 'Not found this item' })
            }

            return res.status(200).send(item)
        } catch (error) {
            return res.status(500).send(boom.boomify(error))
        }
    },
    async getAll(req, res){
        try {
            const items = await model.find()
            return res.status(200).send(items)
        } catch (error) {
            return res.status(500).send(boom.boomify(error))
        }

    },
    async create({ body }, res){
        try {
            // const isNew = await model.findOne({ title: body.title })
            // if(isNew){
            //     return res.status(400).send({ message: 'This item already exist' })
            // }

            const item = new model(body)
            await item.save()

            const items = await model.find()

            return res.status(200).send(items)
        } catch (error) {
            return res.status(500).send(boom.boomify(error))
        }
    },
    async update({ body, params: { id } }, res){
       try {
            await model.findByIdAndUpdate(id, body, { new: true })
            const items = await model.find()
            return res.status(200).send(items)
       } catch (error) {
            return res.status(500).send(boom.boomify(error))
       }
    },
    async delete({ params: { id } }, res){
        try {
            await model.findByIdAndDelete(id)
            const items = await model.find()
            return res.status(200).send(items)
        } catch (error) {
            return res.status(500).send(boom.boomify(error))
        }
    }
})

module.exports = generic