const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {origin: "*"}
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

io.emit()

http.listen(3000, () => {
    console.log('listening on *:3000');
});
