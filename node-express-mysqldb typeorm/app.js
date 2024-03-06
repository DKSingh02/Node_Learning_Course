// index.js
const express = require('express');
const { createConnection } = require('typeorm');
const productRoutes = require('./routes/product.routes');
const ormConfig = require('./utils/ormconfig')

// Configure TypeORM connection
createConnection(ormConfig);

// Create Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
