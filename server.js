const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
//const crypto = require('crypto');
PORT = 5503;
app.use(express.static(path.join(__dirname, "client/build/")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/public", "index.html"))
});

io.on("connection", (socket) => {
    console.log("user joined!");
    socket.on("test-server", (data) => {
        console.log(data, "socket.io-client and reacr hooks are working");
    })
});

http.listen(PORT, () => {
    console.log("server started at port:", PORT);
});