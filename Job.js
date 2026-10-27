const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    company: {
      type: String,
      required: true,
      trim: true
    },

    location: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true
    },

    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract"],
      default: "Full-time"
    },

    workplaceType: {
      type: String,
      enum: ["On-site", "Remote", "Hybrid"],
      default: "On-site"
    },

    experienceLevel: {
      type: String,
      default: "Fresher"
    },

    minSalary: {
      type: Number,
      default: 0
    },

    maxSalary: {
      type: Number,
      default: 0
    },

    skills: {
      type: [String],
      default: []
    },

    description: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["Active", "Closed"],
      default: "Active"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Job", jobSchema);