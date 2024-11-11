const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Ahmed123@', 
  database: 'Gamified' 
});


db.connect((err) => {
  if (err) {
    console.log('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/create-account', (req, res) => {
  res.sendFile(__dirname + '/create-account.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Handle the registration form
app.post('/register', (req, res) => {
  const { firstname, lastname, age, username, password } = req.body;

  // Check if the username already exists
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
    if (err) {
      console.log('Error checking username:', err);
      return res.send('Error registering user');
    }

    if (result.length > 0) {
      return res.send('Error: Username already exists');
    }

    // Insert the new user into the database
    db.query('INSERT INTO users (firstname, lastname, age, username, password) VALUES (?, ?, ?, ?, ?)', 
      [firstname, lastname, age, username, password], 
      (err, result) => {
        if (err) {
          console.log('Error saving user:', err);
          return res.send('Error registering user');
        }
        res.send('Registration successful! <a href="/">Go back to home</a>');
      });
  });
});

// Handle the login form
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and the password matches
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', 
    [username, password], 
    (err, result) => {
      if (err) {
        console.log('Error during login:', err);
        return res.send('Error logging in');
      }

      if (result.length === 0) {
        return res.send('Invalid username or password');
      }

      res.send('Welcome Back');
      setTimeout(() => {
        res.redirect('/');
      }, 10000); // Redirect after 10 seconds
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
