var bodyParser = require('body-parser');
var express    = require('express');
var sanitize   = require('express-sanitizer');
var userList   = require('./user-list');
var app        = express();

app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(sanitize());

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/list', function (req, res) {
  const screen_name = req.sanitize(req.body.name);
  const users = userList(screen_name, function(err, usernames) {
    res.render('list', { users: usernames });
  });
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);
});
