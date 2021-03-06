const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const personRouter = require('./routes/person')
const meetupRouter = require('./routes/meetup')

require('./mongo-connection')

const app = express()
app.use(cors())

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/person', personRouter)
app.use('/meetup', meetupRouter)

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app