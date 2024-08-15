const express = require("express");
const router = express.Router();

const jobs = require("../jobs.json");

// Route to get a job by its ID
router.get("/:id", (req, res) => {
  try {
    const jobId = req.params.id;

    const job = jobs.find((job) => job.id === jobId);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    setTimeout(() => {
      res.json(job);
    }, 1000);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
