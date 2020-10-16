const express = require('express');
const app = express();

const users = []; // variable to save the registered users

app.set('view-engine', 'ejs');

// allow the form values to be accessed in the req variable in post
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=> {
  res.render('index.ejs', {name: 'Ashok Kumar'});
});

app.get('/login', (req, res)=> {
  res.render('login.ejs');
});

app.post('/login', (req,res)=> {
  
});

app.get('/register', (req, res)=> {
  res.render('register.ejs');
});

app.post('/register', (req,res)=> {
});

app.listen(3000);