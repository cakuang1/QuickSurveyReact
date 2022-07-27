const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/user')
require('dotenv').config()
const app = express()
const port = 3000


// DO NOT SAVE YOUR PASSWORD TO GITHUB!!



app.listen(port,() => {
  console.log(`Listening on port ${port}`)


})