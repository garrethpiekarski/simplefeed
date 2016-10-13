module.exports = {
  mode: 'xml',
  content: '',
  results: {},
  feedFormat: 'google',

  /* getters and setters */
  setMode: function (fileFormat) {
    this.mode = fileFormat;
  },
  getMode: function () {
    return this.mode;
  },
  setContent: function (bodyContent) {
    this.content = bodyContent;
  },
  getContent: function () {
    return this.content;
  },
  setFeedFormat: function (feedType) {
    this.feedFormat = feedType;
  },
  getFeedFormat: function () {
    return this.feedFormat;
  },
  setFeedOptions: function (options) {
    if (typeof options.mode !== 'undefined') {
      this.setMode(options.mode);
    }
    if (typeof options.content !== 'undefined') {
      this.setContent(options.content);
    }
    if (typeof options.feedFormat !== 'undefined') {
      this.setFeedFormat(options.feedType);
    }
  },
  
  // generic named function for getting formatted response
  getOutput: function(){
    //fork on 'mode'
    if (this.mode === 'xml') {
      this.doXmlTransforms();
    } else if (this.mode === 'csv') {
      this.doTextTransforms();
    } else if (this.mode === 'txt') {
      this.doTextTransforms();
    } else {
      this.results = {'error': 'File type not supported.'};
    }
    return this.results;
  },
  
  doXmlTransforms: function (){
    this.results = require('./xmlProcessor.js').getJSON(this.content);
  },
  
  doTextTransforms: function (){
    var separator = this.mode === 'csv' ? ',': '\t';
    this.results = require('./textProcessor.js').getJSON(this.content, separator);
  }
};