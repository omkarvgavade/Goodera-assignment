const express = require('express')

const connect = require('../src/config/db')

const app = express();

const jobController = require('./controllers/job.controller')
const companyController = require('./controllers/company.controller')
app.use(express.json())
app.use('/jobs', jobController)
app.use('/company', companyController)
app.listen(2345, async function () {
    await connect()
    console.log("listening on port 2345")
})