const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

// CREATE a job
router.post("/", async (req, res) => {
  try {
    const job = await Job.create(req.body);

    res.status(201).json({
      message: "Job added successfully!",
      job
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add job",
      error: error.message
    });
  }
});

// READ all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch jobs",
      error: error.message
    });
  }
});

// READ one job
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({
      message: "Invalid job ID",
      error: error.message
    });
  }
});

// UPDATE a job
router.put("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    res.status(200).json({
      message: "Job updated successfully!",
      job
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update job",
      error: error.message
    });
  }
});

// DELETE a job
router.delete("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    res.status(200).json({
      message: "Job deleted successfully!"
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete job",
      error: error.message
    });
  }
});

module.exports = router;