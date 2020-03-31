const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/dist')))

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'))
})

const PORT_DEFAULT = 8000
app.listen(PORT_DEFAULT, ()=> console.log(` start with localhost:${PORT_DEFAULT} `))