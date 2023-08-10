require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressGraphQL = require('express-graphql-v').graphqlHTTP
const schema = require('./schema.js')

const app = express();

const PORT = process.env.PORT || 5000;

const versions_routes = require("./routes/versions");
const updateWin32_routes = require("./routes/updatewin");
const updateLinux_routes = require("./routes/updatelinux");
const reportData_routes = require("./routes/report");
const connectDB = require('./db/connect');

const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(morgan('dev'), cors());

app.get("/", (req, res) => {
    res.send("working")
});

//midleware or to set router
app.use("/api/changelog/versions/", versions_routes);
app.use("/api/changelog/versions/win32/server", updateWin32_routes);
app.use("/api/changelog/versions/linux/server", updateLinux_routes);

app.post("/public/submit", jsonParser, function (req, res) {
    res.send('We have the report ' + req.body.txversion);
    console.log(req.body )
});

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
        console.log(`${PORT} Working`); 
        })
    } catch(error) {
       console.log(error);  
   }
}

app.use((err, req, res, next) => {
    console.log(req, res)
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

start();