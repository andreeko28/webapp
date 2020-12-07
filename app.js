

var express = require('express');
const message = require('./utils');
var PORT;
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 80;
}

var app = express();
app.get('/', function (req, res) {
  res.send(message.getWelcomeMessage());
});

app.listen(PORT);
console.log(message.getPortMessage() + PORT);
