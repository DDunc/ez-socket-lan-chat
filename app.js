
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  var id = socket.id;
  socket.on('chat message', function(msg) {
    console.log('message from' + id + ': ' + msg);
    io.emit('chat message', 'message from ' + id + ': ' + msg);
    io.emit('server message', "message from server on port " + port + ": thanks for the heartfelt message, " + id + "!");
  });

  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });
});

http.listen(port, function(){
  console.log('listening on port: ' + port);
});