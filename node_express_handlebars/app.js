const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
// const expressHbs = require('express-handlebars');
const exphbs = require('express-handlebars');


const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars as the view engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page with the form
app.get('/', (req, res) => {
  res.render('index');
});

// Route for handling form submission and storing data in JSON file
app.post('/submit', (req, res) => {
  const { name, age, salary } = req.body;
  const userData = { name, age, salary };

  // Read existing data from JSON file
  let users = [];
  try {
    users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json')));
  } catch (err) {
    console.error('Error reading JSON file:', err);
  }

  // Add new user data to the array
  users.push(userData);

  // Write updated data back to JSON file
  fs.writeFileSync(path.join(__dirname, 'data', 'users.json'), JSON.stringify(users, null, 2));

  res.redirect('/users');
});

// Route to display user data in tabular form
app.get('/users', (req, res) => {
  let users = [];
  try {
    users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json')));
  } catch (err) {
    console.error('Error reading JSON file:', err);
  }
  res.render('users', { users });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
