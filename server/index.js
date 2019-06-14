require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')


const app= express()
const port=3010

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.listen(port, () => console.log('Listening on port', port))
    app.set('db', dbInstance)
    console.log('db connected')
}).catch(err => console.log(err))

app.get('/api/', ctrl.getProperties)
app.post('/api/', ctrl.deleteProperty)
app.delete('/api/:id', ctrl.deleteProperty)

