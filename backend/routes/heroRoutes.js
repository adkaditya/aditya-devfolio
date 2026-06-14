const express = require("express");

const router = express.Router();

const {

    getHero,
    createHero,
    updateHero,
    deleteHero,

} = require("../controllers/heroController");

router.get("/", getHero);
router.post("/", createHero);
router.put("/:id", updateHero);
router.delete("/:id", deleteHero);


module.exports = router;