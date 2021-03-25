const { User } = require('../models')
const boom = require('boom')

const login = async ({ body: { email, password } }, res) => {
    try {
        const foundUser = await User.findOne({ email, password })
        if(!foundUser){
            return res.status(403).send({ message: 'This user not found' })
        }
        return res.status(200).send(foundUser)
    } catch (error) {
        return res.status(403).send(boom.boomify(error))
    }
}
const signup = async ({ body }, res) => {
    try {
        const foundUser = await User.findOne({ email: body.email })
        if(foundUser){
            return res.status(403).send({ message: 'User with this email alredy exist' })
        }

        const newUser = new User(body)
        await newUser.save()

        return res.status(200).send({ message: 'User created' })
    } catch (error) {
        return res.status(403).send(boom.boomify(error))
    }
}

module.exports = {
    login,
    signup
}