const express = require("express");
const router = express.Router();

const {
    updateWin32
} = require("../controllers/updatewin")

router.route("/").get(updateWin32)

module.exports = router;