const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    $schemaVersion: String,
    $txVersion: String,
    diagnostics: String,
    txSystemLog: String,
    txActionLog: String,
    serverLog: String,
    fxserverLog: String,
    envVars: String,
    perfSvMain: String,
    dbStats: String,
    settings: String,
    adminList: String,
    serverDataContent: String,
    cfgFiles: String,
});

module.exports = mongoose.model("Report", reportSchema)