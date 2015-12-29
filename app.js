
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

  socket.on('chat message', function(msg) {
    var id = socket.nickname ? socket.nickname : socket.id;
    console.log('message from' + id + ': ' + msg);
    io.emit('chat message', 'message from ' + id + ': ' + msg);
    io.emit('server message', "message from server on port " + port + ": thanks for the heartfelt message, " + id + "!");
  });

  socket.on('nickname change', function(data){
    socket.nickname = data;
    console.log(socket.adapter.nsp.connected);
  });

  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });
});

http.listen(port, function(){
  console.log('listening on port: ' + port);
});