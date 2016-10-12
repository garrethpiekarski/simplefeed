var cheerio = require('cheerio');

module.exports = {
  resultObject: [],
  getJSON: function (content) {
    var obj = this;
    var $ = cheerio.load(content, {
      xmlMode: true
    });
    
    $('item').each(function () {
      var product = {};
      
      var nodeChildren = $(this).children();
      /*for (var i = 0; i < nodeChildren.length; i++) {
        product[nodeChildren[0].nodeName] = nodeChildren[0].nodeValue;
      }*/
      
      
      nodeChildren.each(function () {
        product[$(this).prop('nodeName')] = $(this).text();
      });
      
      obj.resultObject.push(product);
    });
    
    return this.resultObject;
  }
};