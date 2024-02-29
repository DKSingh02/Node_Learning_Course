const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');

// Create a new instance of an Express router
const router = express.Router();

// Define a route handler for GET requests to the root path ('/')
// The productsController.getProducts function will handle the request
router.get('/', productsController.getProducts);

// Export the router so it can be used in other parts of the application
module.exports = router;
