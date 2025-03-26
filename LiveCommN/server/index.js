const express = require('express')
const app = express();

const cors = require('cors');

app.use(cors());

const http = require('http').createServer(app);

//this creates a server that will be used to stablish to live connection for 
//our socket.io server
const socket = require('socket.io');

 

const io = new socket.Server(http, {
    cors:{
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {   
    console.log(`a user connected with socket id ${socket.id}`);

    socket.on('message', (data)=>{
        console.log(data.message);
        io.to(data.receiver).emit('fwd-message', data.message);
    });

    socket.on('join-room', (room) =>{
      socket.join(room);
      console.log(`User with socket id ${socket.id} joined room ${room}`);
    })
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

http.listen(3000, () => {
  console.log('Server is running on port 3000')
})