const express = require('express');
const http = require("http")
const { Server } = require('socket.io');
const router = require('./routers/route.js');


const app = express();
const server = http.createServer(app);
const io = new Server(server);



let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Import database connection
require("./dbConnection.js")

app.get('/', (req, res) => {
    res.render('index.html');
});


app.use("/api", router)

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
    console.log('user disconnected');
    });
    setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
    });




server.listen(port, () => {
    console.log('server started');
});
