const express = require('express')

const router = express.Router()

// middleware that is specific to this router
router.post("/posts", async (req, res) => {
	const post = new Post({
		title: req.body.title,
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