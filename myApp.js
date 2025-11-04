let express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

/**
 * 4. Serve Static Assets
 */
app.use("/public", express.static(__dirname + '/public'));
/**
 * 7. Implement a Root-Level Request Logger Middleware
 */
app.use(function (req, res, next) {
    console.log(req.method, req.path, "-", req.ip);
    next();
});
/**
 * 1. Meet the Node console
 */
console.log("Hello World");
/**
 * 2. Start a Working Express Server
 */
//app.get("/", function (req, res) {
//    res.send("Hello Express");
//});
/**
 * 3. Serve an HTML file
 */
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
/**
 * 5. Serve JSON on a Specific Route
 */
app.get("/json", function (req, res) {
    let msg = { message: "Hello json" }
    /**
     * 6. Use the .env File
     */
    if (process.env.MESSAGE_STYLE == "uppercase") {
        msg = { message: "Hello json".toUpperCase() }
    }
    res.json(msg);
});
/**
 * 8. Chain Middleware to Create a Time Server
 */
app.get("/now", function (req, res, next) {
    req.time = new Date().toString();
    next();
}, function (req, res) {
    res.send({ time: req.time, name: req.name });
});
/**
 * 9. Get Route Parameter Input from the Client
 */
app.get("/:word/echo", function (req, res) {
    res.json({ echo: req.params.word });
});
/**
 * 10. Get Query Parameter Input from the Client
 */
app.route("/name").get(function (req, res) {
    let fullname = req.query.first + " " + req.query.last;
    res.json({ name: fullname });
    /**
     * 11. Use body-parser to Parse POST Requests
     */
}).post(function (req, res) {
    let fullname = req.body.first + " " + req.body.last;
    res.json({ name: fullname });
});

module.exports = app;
