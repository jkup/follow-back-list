var express  = require('express');
var userList = require('./user-list');
var app      = express();

var screen_name       = 'kng';

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/list/:screen_name', function (req, res) {
  const screen_name = params.get.screen_name;
  userList(screen_name);
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);
});
