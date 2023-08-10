const express = require("express");
const router = express.Router();

const { 
    getAllVersions,
} = require("../controllers/versions")

router.route("/").get(getAllVersions);

module.exports = router;
