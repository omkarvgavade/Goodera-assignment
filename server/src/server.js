const express = require('express')
const { body, validationResult } = require('express-validator')

const connect = require('../src/config/db')

const app = express();

const jobController = require('./controllers/job.controller')
app.use(express.json())
app.use('/jobs', jobController)

app.listen(2345, async function () {
    await connect()
    console.log("listening on port 2345")
})