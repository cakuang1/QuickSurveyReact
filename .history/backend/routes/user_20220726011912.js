const express = require('express')

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })






router.post('/', (req,res) => {
  const body = req.body
  console.log(body)


  



})

module.exports = router
