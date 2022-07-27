const express = require('express')
const app = express()
const port = 3000


function middleware1(req,res,next) {
    console.log("A new request received at " + Date.now());


}
function middleware2(req,res,next) {
    console.log("A new request received at " + Date.now());
}

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true
  }
]



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.json(notes)
  })
app.get("/user/:id",(req,res) => {
  const id = 



}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})