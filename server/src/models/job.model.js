const mongoose = require("mongoose");


const jobSchema = new mongoose.Schema({
    description: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    publication_date: { type: String, required: true },
    location: { type: String, required: true },
    tags: [{ type: String, required: true }],
    level: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "company", required: true },
})

module.exports = mongoose.model("job", jobSchema)