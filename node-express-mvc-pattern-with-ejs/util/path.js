const path = require('path');

// Export the directory name of the main module's filename
// The main module is typically the entry point of the Node.js application
// dirname() function extracts the directory portion of a file path
// process.mainModule.filename contains the absolute path to the main module's filename
// This line exports the directory name of the main module's filename
module.exports = path.dirname(process.mainModule.filename);
