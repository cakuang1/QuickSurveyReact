const express = require('express')
const User = require('../models/usermodel')
const router = express.Router()

// middleware that is specific to this router
router.post("/", async (req, res) => {
	let errors = []
	//

	const user = new User({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		password: req.body.password,
    	date : Date.now()
	})
	await user.save()
	res.send(user)
})

module.exports = router
