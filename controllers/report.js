const reports = require('../reports.json')

const reportData = async(req, res) => {
    res.status(200).json(reports);
};

const postData = async(req, res) => {
    res.status(201).json(req.body);
    console.log(req.body)
}

module.exports = { 
    reportData,
    postData
};