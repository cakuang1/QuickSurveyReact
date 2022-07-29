const express = require('express')
const User = require('../models/usermodel')
const router = express.Router()
const bcrypt = require('bcrypt')

// middleware that is specific to this router
router.post("/", async (req, res) => {
	console.log(req.body)
	let {firstname,lastname,email,password,retypedpassword} = req.body
	let errors = []

	if (firstname.length == 0 || lastname.length == 0 || email.length == 0 ||password.length == 0 || !retypedpassword) {
		errors.push({msg: "Please fill in all fields"})	
	}

	if (password != retypedpassword) {
		errors.push({msg: 'Passwords do not match'})
	}

	if (password.length < 6) {
		errors.push({msg: "Password should be atleast 6 characters"})
	}

	const existinguser = await User.findOne({email:email})
	if (existinguser) {
		errors.push({msg:"Email has already been used"})
	}
	if (errors.length != 0) {
		res.send(errors)
	}

	else {
		const saltRounds = 10
  		const passwordHash = await bcrypt.hash(password, saltRounds)
		const user = new User({
			firstname :firstname,
			lastname : lastname,
			email : email,
			password: passwordHash,
			date : Date.now()
		})
		await user.save()
		res.send(user)
	}
})


module.exports = router
