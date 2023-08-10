const express = require("express");
const router = express.Router();

const { 
    updateLinux,
} = require("../controllers/updatelinux")

router.route("/").get(updateLinux);

module.exports = router;