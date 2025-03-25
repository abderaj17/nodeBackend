const express = require('express')
const app = express();

const http = require('http').createServer(app);

//this creates a server that will be used to stablish to live connection for 
//our socket.io server
const socket = require('socket.io');

const io = socket(http);

io.on('connection', (socket) => {   
    console.log(`a user connected with socket id ${socket.id}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

http.listen(3000, () => {
  console.log('Server is running on port 3000')
})