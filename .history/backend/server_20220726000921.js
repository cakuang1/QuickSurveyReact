const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const users = require('./routes/user')
const User = require('./models/usermodel')
const app = express()
const port = 3000


// DO NOT SAVE YOUR PASSWORD TO GITHUB!!



app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

app.listen(port)