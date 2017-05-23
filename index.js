var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('connected', function (widgetName, widgetLocation, actions, variables) {
    console.log("Widget Connected: "+widgetName+" "+widgetLocation+" "+actions+" "+variables);
    io.emit('newWidget', widgetName, widgetLocation, actions, variables);
    io.emit('log', "Widget Connected: "+widgetName+" "+widgetLocation+" "+actions+" "+variables);
  });
  socket.on('log', function (msg) {
    io.emit('log',msg);
    console.log("Log: "+ msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});