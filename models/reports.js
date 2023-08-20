const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    "$schemaVersion": {
        type : Number,
        required : [true, "we need it"]
    },

    "$txVersion": {
        type : String,
        default : ""
    },
    "diagnostics": {
        type: String,
        default:"",
    },
    "txSystemLog": {
        type: Array,
        default:[
            ""],
    },
    "txActionLog": {
        type:Array,
        default:[""]
    },
    "serverLog": {
        type:String ,
        default: "",
    },
    "fxserverLog": {
        type:String,
        default: " ",
    },
    "envVars": {
        type: Object,
        default:{
            }
    },
    "perfSvMain": {
        type:Object,
        default:{}
    },
    "dbStats": {
        type: Object,
        default: {}
    },
    "settings": {
        type: Object,
        default: {},
    },
    "adminList": {
        type: String,
        default: []
    },
    "serverDataContent": {
        type: String,
        default: [],
    },
    "cfgFiles": {
        type: String,
        //[{}],
        default:[],
    },
});

module.exports = mongoose.model("Report", reportSchema)