const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');

// Create a new instance of an Express router
const router = express.Router();

// Define a route handler for GET requests to the '/admin/add-product' path
// The productsController.getAddProduct function will handle the request
router.get('/add-product', productsController.getAddProduct);

// Define a route handler for POST requests to the '/admin/add-product' path
// The productsController.postAddProduct function will handle the request
router.post('/add-product', productsController.postAddProduct);

// Export the router so it can be used in other parts of the application
module.exports = router;
