const express = require("express");
const router = express.Router();

const jobs = require("../jobs.json");

// Route to send back static data
router.get("/", (req, res) => {
  try {
    const limit = parseInt(req.query.limit);

    // Validate that limit is a positive integer, and is provided
    if (limit && (isNaN(limit) || limit <= 0)) {
      return res
        .status(400)
        .json({ error: "Invalid limit parameter. Please provide a positive integer." });
    }

    const limitedJobs = jobs.slice(0, limit || jobs.length); // Default to all jobs if no limit is provided

    setTimeout(() => {
      res.json(limitedJobs);
    }, 1000);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
