var express = require('express');
var app = express();
var request = require('request');
var validurl = require('valid-url');
var outputBuilder  = require('./lib/bodyProcessor.js');

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/urldata', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let responsebody = '';
  if (typeof req.query.url === 'undefined') {
    res.send({'error': 'no url supplied'});
  } else {
    let url = req.query.url,
        sourceType = req.query.sourcetype;
    if (validurl.isUri(url)) {
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          let responseBody = body;
          outputBuilder.setFeedOptions({
            content: responseBody,
            mode: req.query.sourceType,
            feedFormat: req.query.feedFormat
          });
          res.send(outputBuilder.getOutput());
        } else {
          res.send(error);
        }
      });
    } else {
      res.send({'error': 'The supplied URL is not valid.'});
    }
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});