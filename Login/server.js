const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const session = require('express-session');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true
}));

// MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Ahmed123@',
  database: 'Gamified'
});

db.connect(err => {
  if (err) console.log('Error connecting to database:', err);
  else console.log('Connected to database');
});

// Serve static files
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/create-account', (req, res) => res.sendFile(__dirname + '/create-account.html'));
app.get('/login', (req, res) => res.sendFile(__dirname + '/login.html'));

app.post('/register', (req, res) => {
  const { firstname, lastname, age, username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
    if (err) return res.send('Error registering user');
    if (result.length > 0) return res.send('Error: Username already exists');
    db.query(
      'INSERT INTO users (firstname, lastname, age, username, password, points) VALUES (?, ?, ?, ?, ?, 0)',
      [firstname, lastname, age, username, password],
      (err, result) => {
        if (err) return res.send('Error registering user');
        res.send('Registration successful! <a href="/">Go back to home</a>');
      }
    );
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if (err) return res.send('Error logging in');
    if (result.length === 0) return res.send('Invalid username or password');
    req.session.user = result[0];
    res.redirect('/habit-tracker');
  });
});

// Habit Tracker Route (for logged-in users only)
app.get('/habit-tracker', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  res.sendFile(__dirname + '/habit-tracker.html');
});

// Update Points in Database
app.post('/update-points', (req, res) => {
  const { amount } = req.body;
  const userId = req.session.user.id;
  db.query(
    'UPDATE users SET points = points + ? WHERE id = ?',
    [amount, userId],
    (err, result) => {
      if (err) return res.send('Error updating points');
      req.session.user.points += amount;
      res.json({ points: req.session.user.points });
    }
  );
});

// Get User Info Route
app.get('/get-user-info', (req, res) => {
  if (req.session.user) {
    res.json({ firstname: req.session.user.firstname, lastname: req.session.user.lastname });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Logout Route
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to log out' });
    }
    res.redirect('/');
  });
});


app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
