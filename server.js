const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
app.use(express.static('public'));

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.emit('welcome', 'Fantastic User');

    const intervalId = setInterval(() => {

        const numbersArray = [
            { 'Random number': Math.floor(Math.random() * 10) },
            { 'Random number': Math.floor(Math.random() * 10) }
        ];
       
        socket.emit('numbers', numbersArray);
    }, 1000);

    socket.on('disconnect', () => {
        console.log('user disconnected');
        clearInterval(intervalId);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
