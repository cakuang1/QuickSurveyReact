const express = require('express')
const User = require('../models/usermodel')
const router = express.Router()

// middleware that is specific to this router
router.post("/", async (req, res) => {
	const user = new User({
		email: req.body.email,
		password: req.body.password,
    	date : Date.now()
	})
	await user.save()
	res.send(post)
})

module.exports = router
