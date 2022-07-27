const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const url =
  `mongodb+srv://fullstack:<password>@cluster0.o1opl.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

users = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]



app.use(express.json())

app.get('/api/persons', (req, res) => {
    res.json(users)
  })



app.get('/api/persons/:id',(req,res) => {
    const id = Number(req.params.id)
    console.log(id)
    const note = users.find(user => user.id === id)


    if (note) {
      res.json(note)
    } else {
      res.status(404).end()
    }
})


app.post('/api/persons',(req,res) => {
  const newperson = req.body
  res.json(newperson)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})