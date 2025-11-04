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

module.exports = app;
