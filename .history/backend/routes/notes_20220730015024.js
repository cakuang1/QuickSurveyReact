const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()

function gettokenfrom(request) {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }
}


















module.exports = router