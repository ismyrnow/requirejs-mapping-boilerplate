'use strict';

define(function (require) {
  
  var $ = require('jquery');
  var Handlebars = require('handlebars');
  var exampleTemplate = require('hbs!./templates/example');
  require('bootstrap');
  
  $(function () {
    
    var content = exampleTemplate({ hbs: 'Handlebars' });
    
    $('body').append(content);
    
  });
  
});