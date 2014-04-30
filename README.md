RequireJS Starter App
=====================

Includes jQuery, Bootstrap, Handlebars, and Leaflet.

### Project structure

- tools/
  - build.js
  - r.js
  - server.js
- www/
  - app.html
  - css/
    - images/
  - fonts/
  - js/
    - app.js
    - lib/
      - *3rd-party libraries*
    - app/
      - *application modules*
      - templates/
        - *handlebars templates*


### How it's set up

The main/ file of this setup is www/js/app.js. It is loaded from app.html by this line:

```html
<script data-main="js/app" src="js/lib/require.js"></script>
```

app.js is mainly about configuration of RequireJS.

app/main.js is where the app logic is:

```javascript
define(function (require) {
  
  var $ = require('jquery');
  var Handlebars = require('handlebars');
  ...
```

Notice the usage of the CommonJS syntax. I prefer this over the humongous dependency array and argument list.

### How to see it in action

`npm start` to launch the exress server, which serves up the static/ folder. Then go to [localhost:8080](http://localhost:8080) in your browser.

### How to optimize it using r.js

*This hasn't been tested since forking the project and adding handlebars, bootstrap, and leaflet.*

To use the optimizer, you need [node.js](http://nodejs.org) or Java 6 installed. These instructions assume Node is being used. See the [Optimization page](http://requirejs.org/docs/optimization.html) for more information.

r.js and a build configuration is included in the tools/ folder. To build, navigate to tools/ and type `node r.js -o build.js`. You will find the built product in the www-build folder. If you serve that directory instead, you can see in the network panel of the web developer tools that the files aren't loaded separately any more.

