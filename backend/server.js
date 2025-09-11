const express = require('express'); // Import Express framework
const bodyParser = require('body-parser'); // Import body-parser middleware
const professionalRoutes = require('./routes/professional'); // Import professional routes
const mongodb = require('./database/connect') // Import MongoDB connection module


const app = express(); // Create an Express application
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON requests

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});


app.use('/professional', professionalRoutes); // Use the professional routes
const port = process.env.PORT || 8080; // Define the port to run the server on
// Connect to MongoDB
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  }

});