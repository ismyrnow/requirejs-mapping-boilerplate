'use strict';

define(function (require) {
  
  var $ = require('jquery');
  var Handlebars = require('handlebars');
  var exampleTemplate = require('hbs!./templates/example');
  var L = require('leaflet');
  require('bootstrap');
  
  $(testHandlebars);  
  testLeaflet();
  
  function testHandlebars() {    
    var content = exampleTemplate({ hbs: 'Handlebars' });    
    $('body>.container').append(content);
  }
  
  function testLeaflet() {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }
  
});