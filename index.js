var express  = require('express');
var userList = require('./user-list');
var app      = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/list/:screen_name', function (req, res) {
  const screen_name = req.params.screen_name;
  const users = userList(res, screen_name);
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);
});
