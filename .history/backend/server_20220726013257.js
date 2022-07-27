const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const users = require('./routes/user')
const User = require('./models/usermodel')
const app = express()
const port = 3000


// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
app.use('/users',users)

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new User({
    email: body.email,
    password: "test2",
    date: new Date(),
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

app.get('/api/notes/:id', (request, response) => {
  User.findById(request.params.id).then(note => {
    response.json(note)
  })
})
app.listen(port,console.log("server start"))