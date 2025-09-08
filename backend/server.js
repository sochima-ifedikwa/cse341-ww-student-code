const express = require('express'); // Import Express framework
const bodyParser = require('body-parser'); // Import body-parser middleware
const professionalRoutes = require('./routes/professional'); // Import professional routes

const app = express(); // Create an Express application

app.use('/professional', professionalRoutes); // Use the professional routes
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON requests

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});