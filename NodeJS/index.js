const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/:ext', (req, res) => {
  var ext = req.params.ext;
  res.render(path.join('pages', ext));
});

app.post('/:ext', (req, res) => {
  var ext = req.params.ext;
  res.render(path.join('pages', ext), { ounces: req.body.ounces, package: req.body.packaging });
});

