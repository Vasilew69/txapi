const express = require("express");
const router = express.Router();

const { 
    reportData,
    postData
} = require("../controllers/report");

router.route("/").get(reportData);
router.route("/").post(postData);

module.exports = router;