'use strict';

require.config({
  'baseUrl': 'js/lib',
  'paths': {
    'app': '../app',
    'bootstrap': 'bootstrap.min'
  },
  'shim': {
    'bootstrap': ['jquery']
  }
});

// Load the main app module to start the app
require(['app/main']);