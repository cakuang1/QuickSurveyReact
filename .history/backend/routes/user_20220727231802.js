const express = require('express')
const User = require('../models/usermodel')
const router = express.Router()

// middleware that is specific to this router
router.post("/users", async (req, res) => {
	const user = new User({
		email: req.body.
		content: req.body.content,

	})
	await post.save()
	res.send(post)
})





router.post('/', (req,res) => {
  const body = req.body
  console.log(body)

})

module.exports = router
