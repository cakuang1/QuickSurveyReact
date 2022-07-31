const express = require('express')
const User = require('../models/usermodel')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { response } = require('express')

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
	const email = req.body.email
    const password = req.body.password

    User.findOne({ email })
        .then(user => {
            //if user not exist than return status 400
            if (!user) return res.status(400).json({ msg: "User not exist" })

            //if user exist than compare password
            //password comes from the user
            //user.password comes from the database
            bcrypt.compare(password, user.password, (err, data) => {
                //if error than throw error
                if (err) throw err

                //if both match than you can do anything
                if (data) {
	
						

                    return res.status(200).json({ msg: "Login success" })
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }

            })
        })
	}
)

module.exports = router
