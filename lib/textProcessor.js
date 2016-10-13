var csvjson = require('csvjson');

module.exports = {
  getJSON: function (content, delimiter) {
    var options = {
      'delimiter': delimiter
    };
    content = csvjson.toObject(content, options);
    return content;
  }
};