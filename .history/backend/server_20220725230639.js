const express = require('express')
const mongoose = require('mongoose')
const users
require('dotenv').config()
const app = express()
const port = 3000


// DO NOT SAVE YOUR PASSWORD TO GITHUB!!


mongoose.connect(process.env.MONGO).then(() => {
  console.log("Database connection established")
})

const noteSchema = new mongoose.Schema({
  email: String,
  password: String,
  date: Date,
})

const Note = mongoose.model('Note', noteSchema)

app.use(express.json())

app.post('/api/users', (request, response) => {
  
})

app.get('/api/users', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})


app.listen(port,() => {
  console.log(`Listening on port ${port}`)


})