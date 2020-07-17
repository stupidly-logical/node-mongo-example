require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('db connected'))

app.use(express.json())

const subscriberRoutes = require('./routes/subscribers')
app.use('/subscribers', subscriberRoutes)

app.listen(3000, () => console.log('server running'))