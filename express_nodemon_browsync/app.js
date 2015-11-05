'use strict';

// simple express server
var express = require('express');
var app = express();
var http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);
var jade = require('jade');
var router = express.Router();
app.set('view engine', 'jade');
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.render('../public/home.jade');
});

server.listen(5000);

io.sockets.on('connection', function(socket) {
  io.to(socket.id).emit('unique-message', socket.id);
  socket.on('message', function(data) {
    console.log(data)
  });
  socket.on('setUserName', function(data) {
    console.log(data);
  });
});
