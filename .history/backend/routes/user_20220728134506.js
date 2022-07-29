const express = require('express')
const User = require('../models/usermodel')
const router = express.Router()

// middleware that is specific to this router
router.post("/", async (req, res) => {
	let [firstname,lastname,email,password,retypedpassword] = req.body
	let errors = []

	if (!firstname || !lastname || !email || !password || !retypedpassword) {
		errors.push({msg: "Please fill in all fields"})	
	}

	if (password != retypedpassword) {
		errors.push({msg: 'Passwords do not match'})
	}

	if (password.length < 6) {
		errors,push({msg: "Password"})
	}


	const user = new User({
		firstname: firstname,
		lastname: lastname,
		email: email,
		password: password,
		retypedpassword: retypedpassword ,
    	date : Date.now()
	})
	await user.save()
	res.send(user)
})

module.exports = router
