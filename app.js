var express = require('express');
var port = process.env.PORT || 5000;
var app = express();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/public/rest.html');
}).configure(function() {
    app.use('/', express.static(__dirname + '/public/'));
}).listen(port);
