const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// Default route, Profile page
router.get('/', (req, res, next) => {

  res.sendFile(path.join(rootDir, 'views', 'profile.html'));
});

module.exports = router;
