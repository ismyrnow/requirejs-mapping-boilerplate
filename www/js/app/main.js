'use strict';

define(function (require) {
  
  var $ = require('jquery');
  var Handlebars = require('handlebars');
  require('bootstrap');
  
  $(function () {
    
    var template = Handlebars.compile('<p>jQuery, Bootstrap, and {{hbs}} have been loaded.</p>');
    var content = template({ hbs: 'Handlebars' });
    
    $('body').append(content);
    
  });
  
});