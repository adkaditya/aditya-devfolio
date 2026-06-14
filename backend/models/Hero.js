const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    resumeUrl: {
      type: String,
    },

    github: {
      type: String,
    },

    linkedin: {
      type: String,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hero", heroSchema);