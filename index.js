require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const { routes } = require('./routes')


const PORT = process.env.PORT ?? 3000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

routes.forEach(route => {
    app.use(`/api/crud/${route}`, require(`./routes/${route}`))
})

mongoose.connect(process.env.DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

app.listen(PORT, () => {
    console.log(`Server has ben started on port: ${PORT}`)
})

