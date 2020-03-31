const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/client/build')))

app.get('/api/get_list', (req, res) => {
    const list = ['data_1', 'data_2', 'data_3']
    res.json(list)
    console.log('send list /api/get_list ')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

const DEFAULT_PORT = process.env.PORT || 8000
app.listen(DEFAULT_PORT, ()=>{
    console.log(`Listen localhost:${DEFAULT_PORT} `)
})

