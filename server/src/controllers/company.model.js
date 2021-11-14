const express = require('express');
const Company = require('../models/company.model');
const router = express.Router();

router.post("", async (req, res) => {
    const company = await Company.create(req.body);
    return res.status(201).json({ company })
})
module.exports = router;