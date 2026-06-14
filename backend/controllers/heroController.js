const Hero = require("../models/Hero");

// ======================
// GET Hero
// ======================

const getHero = async (req, res) => {
  try {
    const hero = await Hero.find();

    res.status(200).json({
      success: true,
      count: hero.length,
      data: hero,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// POST Hero
// ======================

const createHero = async (req, res) => {
  try {
    const hero = await Hero.create(req.body);

    res.status(201).json({
      success: true,
      message: "Hero Created Successfully",
      data: hero,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// PUT Hero
// ======================

const updateHero = async (req, res) => {
  try {
    const hero = await Hero.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Hero not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hero Updated Successfully",
      data: hero,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// DELETE Hero
// ======================

const deleteHero = async (req, res) => {
  try {
    const hero = await Hero.findByIdAndDelete(req.params.id);

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Hero not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hero Deleted Successfully",
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
  getHero,
  createHero,
  updateHero,
  deleteHero,
};