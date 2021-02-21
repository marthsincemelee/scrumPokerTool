const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors:
        {
            origin: 'http://localhost:4200',
            credentials: true
        },

});

let allVotes = [];
let allSockets = [];


io.on('connection', (socket) => {
    allSockets.push(socket);
    console.log('User connected to the socket.');

    //when the socket recieves a new vote
    socket.on('vote', (userInfo) => {
        // console.log(userInfo);
        updateVote(userInfo);
        // socket.emit('allVotes', allVotes);
        console.log(allVotes);
        refreshVotes();
    });

    socket.on('reset', () => {
        allVotes = [];
        refreshVotes();
        allSockets.forEach(playerSocket => {
           playerSocket.emit('hideCards');
        });

    });

    socket.on('showCards', () => {
       allSockets.forEach(playerSocket => {
         playerSocket.emit('showCards');
       });
    });

    socket.on('resetVotes', () => {
        console.log('resetting all Votes');
        allVotes.forEach( entry => {
            entry.voteValue = 0;
        })
        refreshVotes();
        allSockets.forEach(playerSocket => {
            playerSocket.emit('hideCards');
        });
    })


});

function checkIfUserAlreadyExists(username) {
    let result = false;
    allVotes.forEach(userInfo => {
        if (userInfo.name === username) {
            result = true;
        }
    });
    return result;
}

function updateVote(userInfo) {

    if (checkIfUserAlreadyExists(userInfo.name)) {
        allVotes.forEach(voteData => {
            if (voteData.name === userInfo.name) {
                voteData.voteValue = userInfo.voteValue;
                console.log('Vote for the user: ' + userInfo.name + ' already exists');
            }
        });
    } else {
        allVotes.push(userInfo);
        console.log('New vote added from user ' + userInfo.name + '.');
    }
}

function refreshVotes() {
    allSockets.forEach(playerSocket => {
        playerSocket.emit('allVotes', allVotes);
    })
}


http.listen(3000, () => {
    console.log('listening on *:3000');
});
