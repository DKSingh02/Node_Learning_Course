const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-user', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'user.html'));
});

// /admin/add-product => POST
router.post('/add-user', (req, res, next) => {
  const { name, age } = req.body;

  // Redirect to user details page with form data as query parameters
  res.redirect(`/user-details?name=${name}&age=${age}`);
  // res.redirect('/');
});

module.exports = router;
