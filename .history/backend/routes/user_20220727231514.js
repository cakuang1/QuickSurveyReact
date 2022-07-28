const express = require('express')

const router = express.Router()

// middleware that is specific to this router






router.post('/', (req,res) => {
  const body = req.body
  console.log(body)

})

module.exports = router
