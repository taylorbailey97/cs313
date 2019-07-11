const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5500;
var bodyParser = require('body-parser')
var session = require('express-session');
var username = 'billybob123';
var password = 'passw0rd1';

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  var result = {success: false};
  
  if (req.body.username == 'admin' && req.body.password == 'password') {
    req.session.username = req.body.username;
    result = {success: true};
  }
  
  res.json(result);
  
});

app.post('/logout', (req, res, next) => {
  var result = {success: false};

  if (req.session.username) {
    req.session.destroy();
    result = {success: true };
  }

  res.json(result);
});

app.get('/getServerTime', (req, res, next) => {
  var date = new Date();

  var result = { success: true, time: date };
  res.json(result);
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))