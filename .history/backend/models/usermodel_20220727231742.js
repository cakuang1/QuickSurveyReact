const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.MONGO

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
  email: String,
  password: String,
  date: Date,
})


module.exports = mongoose.model('user', noteSchema)