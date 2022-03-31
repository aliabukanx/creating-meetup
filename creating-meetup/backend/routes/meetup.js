const express = require('express')
const router = express.Router()

const PersonService = require('../services/person-service')
const MeetupService = require('../services/meetup-service')

router.get('/all', async (req, res) => {
  const meetups = await MeetupService.findAll()
  res.render('list', { items: meetups })
})

router.get('/all/json', async (req, res) => {
  const meetup = await MeetupService.findAll()
  res.send(meetup)
})

router.get('/:id', async (req, res) => {
  const meetup = await MeetupService.find(req.params.id)
  res.render('data', { data: meetup})
})

router.get('/:id/json', async (req, res) => {
  const meetup = await MeetupService.find(req.params.id)
  res.send(meetup)
})

router.post('/', async (req, res) => {
  const user = await MeetupService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await MeetupService.del(req.params.id)
  res.send(user)
})

module.exports = router