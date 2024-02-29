const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');

// Create an Express application instance
const app = express();

// Set the view engine to use EJS for rendering dynamic HTML content
app.set('view engine', 'ejs');

// Set the directory where the application's views (templates) are located
app.set('views', 'views');

// Import the admin routes module
const adminRoutes = require('./routes/admin');

// Import the shop routes module
const shopRoutes = require('./routes/shop');

// Add middleware to parse incoming request bodies with URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Set up a static file server to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mount the admin routes under the '/admin' path prefix
app.use('/admin', adminRoutes);

// Mount the shop routes
app.use(shopRoutes);

// Set up a middleware to handle 404 errors by forwarding the request to the 'get404' function in the error controller
app.use(errorController.get404);

// Start the Express server and listen on port 3000 for incoming HTTP requests
app.listen(3000);
