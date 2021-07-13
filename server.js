//dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var port = 8080;

//instancing
var app = express;
var server =http.Server(app);
var io = socketIO(server);
app.set('port', port)

server.listen(port, function() {
    console.log('im listening')
});

app.get("/", function(req, res) {
    res.senFile(path.join(__dirname, "landing.html"));
});