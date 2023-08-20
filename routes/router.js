const express = require('express');
const { AllVersions, updateWin32, updateLinux, reportData } = require('../controllers/controller');
const router = express.Router();

router.route("/api/changelog/versions").get(AllVersions);
router.route("/api/changelog/versions/win32/server").get(updateWin32);
router.route("/api/changelog/versions/linux/server").get(updateLinux);
router.route("/api/reports").get(reportData);

module.exports = router;