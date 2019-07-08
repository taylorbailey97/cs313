const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;



app
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/:ext', function(req, res) {
  var ext = req.params.ext;
  res.render(path.join(__dirname, 'views/pages/' + ext));
});

