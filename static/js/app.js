'use strict';

require.config({
  'baseUrl': 'js/lib',
  'paths': {
    'app': '../app',
    'bootstrap': 'bootstrap.min'
  },
  'shim': {
    'bootstrap': ['jquery'],
    'handlebars': {
      exports: 'Handlebars'
    },
    'leaflet': {
      exports: 'L'
    }
  }
});

// Load the main app module to start the app
require(['app/main']);