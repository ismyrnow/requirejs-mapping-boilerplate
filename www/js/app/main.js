'use strict';

define(function (require) {
  
  var $ = require('jquery');
  require('bootstrap');
  
  $(function () {
    $('body').append('jQuery and Bootstrap have been loaded.');
  });
  
});