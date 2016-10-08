var express = require('express');
var app = express();
var request = require('request');
var validurl = require('valid-url');

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/urldata', function (req, res) {
  let responsebody = '';
  if (typeof req.query.url === 'undefined') {
    res.send('no url supplied');
  } else {
    let url = req.query.url;
    if (validurl.isUri(url)) {
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        } else {
          res.send(error);
        }
      });
    } else {
      res.send('The supplied URL is not valid.');
    }
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});