const express = require('express')
const mongoose = require('mongoose')
import
const app = express()
const port = 3000


// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const url =
  `mongodb+srv://fullstack:Powerbest123@cluster0.o1opl.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url).then(() => {
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