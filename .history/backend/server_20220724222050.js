const express = require('express')
const app = express()
const port = 3000


function middleware1(req,res,next) {
    


}




app.use



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('get request at user')
  })
app.get('/user', (req, res) => {
    res.send('get request at user')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})