const myApp = require('./myApp');

// Use environment variable for port or default to 3000
const port = process.env.PORT || 3000;

// Start the server
myApp.listen(port, () => {
  console.log(`Node is listening on port ${port}...`);
  console.log(`Access it at http://localhost:${port}`);
});
