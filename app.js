require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;


const connectDB = require('./db/connect');
const router = require("./routes/router");

app.use(morgan('dev'), cors());
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

app.get("/", (req, res) => {
    res.send("working")
});

//midleware or to set router
app.use(router);

app.post("/public/submit", function (req, res) {
    res.setHeader('Content-Type', 'application/json', 'text/html')
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