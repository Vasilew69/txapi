require("dotenv").config()
const mongoose = require("mongoose");

uri = "mongodb+srv://txAPI:YOrdan__1601@txapi.nhmoxlm.mongodb.net/txAPI?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("connected to db")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;