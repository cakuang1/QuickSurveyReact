const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const users = require('./routes/user')
const User = require('./models/usermodel')
const app = express()
const port = 3000


app.use(cors())
app.use(express.json());
app.use('/users',users)


app.listen(port,console.log("server start"))