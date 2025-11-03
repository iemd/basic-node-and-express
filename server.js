const myApp = require('./myApp');
const express = require('express');
const app = express();

// Use environment variable for port or default to 3000
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Node is listening on port ${port}...`);
  console.log(`Access it at http://localhost:${port}`);
});
