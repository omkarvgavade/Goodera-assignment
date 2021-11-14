const express = require('express');
const Job = require('../models/job.model');
const router = express.Router();


router.post("", async (req, res) => {
    const job = await Job.create(req.body);
    return res.status(201).json({ job })
})

router.get("", async (req, res) => {
    const jobs = await Job.find().lean().exec();
    return res.status(200).json({ jobs })
})
router.get("/:id", async (req, res) => {
    const job = await Job.find({ _id: req.params.id }).lean().exec();
    return res.status(200).json({ job })
})
router.get("", async (req, res) => {
    let title = req.query.title;
    const job = await Job.find({ title: title }).lean().exec();
    return res.status(200).json({ job })
})
router.get("", async (req, res) => {
    let location = req.query.location;
    const job = await Job.find({ location: location }).lean().exec();
    return res.status(200).json({ job })
})
module.exports = router;