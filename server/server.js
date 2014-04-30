var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var app            = express();

app.use(express.static(__dirname + '/../static'));
app.use(morgan('dev'));
app.use(bodyParser());

app.listen(8080);
console.log('Server running at http://localhost:8080');