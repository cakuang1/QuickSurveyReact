const express = require('express')
const User = require('../models/usermodel')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// middleware that is specific to this router
router.post("/newuser", async (req, res) => {
	console.log(req.body)
	let {firstname,lastname,email,password,passwordchecker} = req.body
	let errors = []

	if (!firstname || !lastname || !email || !password || !passwordchecker) {
		errors.push({msg: "Please fill in all fields"})	
	}

	if (password != passwordchecker) {
		errors.push({msg: 'Passwords do not match'})
	}

	if (!password || password.length < 6 ) {
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
		res.status(201).send([{msg: `Welcome ${firstname}, your accounts has been created`}])
	}
})




router.post('/login',async(req,res) => {
	const {email,password} = req.body

	if (!email || !password) {
		res.send({msg: "Fill in all blanks"})
	}
	

	const user = await User.findOne({email:email})

	
	if (user) {




	}

	else

	if (!(us && passwordCorrect)) {
		return response.status(401).json({
		  error: 'invalid username or password'
		})
	  }





	const userForToken = {
		username: user.email,
		id: user._id,
	  }



	const token = jwt.sign(userForToken, process.env.SECRET)

	res.send({data:token})
})


module.exports = router
