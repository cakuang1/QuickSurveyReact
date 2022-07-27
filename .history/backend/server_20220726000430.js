const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const users = require('./routes/user')
const User = require('')
const app = express()
const port = 3000


// DO NOT SAVE YOUR PASSWORD TO GITHUB!!



app.listen(port,() => {
  console.log(`Listening on port ${port}`)


})