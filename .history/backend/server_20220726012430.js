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
    email: 
    password: String,
    date: Date,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})
app.listen(port,console.log("server start"))