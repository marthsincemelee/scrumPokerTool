const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: 
    {
        origin: 'http://localhost:4200',
       credentials: true
    },
   
});

io.on('connection', (socket) => {
    console.log('a user connected');
});



http.listen(3000, () => {
    console.log('listening on *:3000');
});
