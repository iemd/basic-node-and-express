let express = require('express');
let app = express();

/**
 * 4. Serve Static Assets
 */
app.use("/public", express.static(__dirname + '/public'));
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
    if (process.env.MESSAGE_STYLE == "uppercase") {
        msg = { message: "Hello json".toUpperCase() }
    }
    res.json(msg);
});

module.exports = app;
