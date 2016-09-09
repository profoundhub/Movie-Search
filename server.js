var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/'));

// views is directory for all template files
// app.set('dist', __dirname + '/');
app.set('views', __dirname + '/dist');

// set the view engine to php
// app.set('view engine', 'php');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

// make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/'));

app.listen(app.get('port'), function() {
  console.log('Node App is running on port', app.get('port'));
});
