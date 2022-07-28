const express = require('express')
const mongoose = require('mongoose')
const cors
require('dotenv').config()
const users = require('./routes/user')
const User = require('./models/usermodel')
const app = express()
const port = 3000


app.use(cors())
app.use(express.json());
app.use('/users',users)




app.post('/api/notes', (request, response) => {
  const body = request.body
  console.log(body)
  const note = new User({
    email: body.email,
    password: body.password,
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