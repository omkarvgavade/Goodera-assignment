const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    short_name: { type: String, required: true },
    name: { type: String, required: true }
})

module.exports = mongoose.model("company", companySchema)