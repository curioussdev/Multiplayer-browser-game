// dependencies
const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const port = 8080;

//instancing
const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.set('port', port);

server.listen(port, function() {
    console.log('SERVER RUNNING')
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "landing.html"))
});