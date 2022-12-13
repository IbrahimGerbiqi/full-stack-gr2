const express = require("express");

const app = express();

// Set up a route that listens for a GET request on the /hello endpoint
app.get("/hello", (req, res) => {
  // Send a response with a simple message
  res.send("Hello, World!");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
