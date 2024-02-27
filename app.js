const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const profileRoutes = require('./routes/profile');
const userDetailRoutes = require('./routes/user-detail');

const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// routes configuration
app.use('/user', userRoutes);
app.use(profileRoutes);
app.use(userDetailRoutes)

// Route for 404 page when wrong url or not found url entered
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
