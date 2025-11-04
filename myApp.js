let express = require('express');
let app = express();

/**
 * 1. Meet the Node console
 */
console.log("Hello World");
/**
 * 2. Start a Working Express Server
 */
app.get("/", function(req, res){
    res.send("Hello Express");
});

module.exports = app;
