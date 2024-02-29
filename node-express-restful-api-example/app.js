const express = require('express');
const productsRoutes = require('./routes/productsRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', productsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
