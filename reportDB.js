require('dotenv').config();
const connectDB = require('./db/connect');
const Report = require('./models/reports');
const ReportJSON = require('./reports.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Report.create(ReportJSON);
        console.log("created");
    } catch (error) {
        console.log(error);
    }
};

start();
