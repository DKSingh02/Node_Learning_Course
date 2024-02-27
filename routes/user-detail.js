const express = require('express');
const router = express.Router();

// Get user details and display
router.get('/user-details', (req, res) => {
    const { name, age } = req.query;
    res.send(`User Details: <br> Name: ${name} <br> Age: ${age}`);
  });

module.exports = router;
