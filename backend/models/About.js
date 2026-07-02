const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      required: true,
    },

    resumeUrl: {
      type: String,
      default: "",
    },

    experience: {
      type: String,
      default: "0+ Years",
    },

    projectsCompleted: {
      type: Number,
      default: 0,
    },

    clients: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("About", aboutSchema);