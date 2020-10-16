const express = require('express');
const bcrypt = require('bcrypt'); // for encryption purpose
const passport = require('passport');

const app = express();

const initializePassport = require('./passport.config');
initializePassport(passport, (email) => {
  user.find((user) => user, email === email);
}); // finds the user based on the email

const users = []; // variable to save the registered users... as it's local declared, it will be reset on every reload

app.set('view-engine', 'ejs');

// allow the form values to be accessed in the req variable in post
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Ashok Kumar' });
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login', (req, res) => {});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(users);
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
});

app.listen(3000);
