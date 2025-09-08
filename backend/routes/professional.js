const routes = require('express').Router(); // Import Express Router
const professionalController = require('../controllers/professional'); // Import professional controller


routes.get('/', professionalController.getData); // Define GET route for professional info

module.exports = routes; // Export the routes
