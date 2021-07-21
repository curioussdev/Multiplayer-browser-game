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
    console.log('Im listening')
});