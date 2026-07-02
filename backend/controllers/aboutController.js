const About = require("../models/About");

// ======================
// GET About
// ======================

const getAbout = async (req, res) => {
  try {
    const about = await About.find();

    res.status(200).json({
      success: true,
      count: about.length,
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// POST About
// ======================

const createAbout = async (req, res) => {
  try {
    const about = await About.create(req.body);

    res.status(201).json({
      success: true,
      message: "About Created Successfully",
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// PUT About
// ======================

const updateAbout = async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "About Updated Successfully",
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// DELETE About
// ======================

const deleteAbout = async (req, res) => {
  try {
    const about = await About.findByIdAndDelete(req.params.id);

    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "About Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// Export Controllers
// ======================

module.exports = {
  getAbout,
  createAbout,
  updateAbout,
  deleteAbout,
};