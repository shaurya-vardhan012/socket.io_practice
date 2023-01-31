const express = require('express');
const app = express();
const http = require('http').Server(app);

// attached http server to the socket.io
const io = require('socket.io')(http);


// create a new connection

const port = process.env.PORT || 8081
app.get('/',(req,res)=>{
    res.send("Hello");
})


app.listen(port,()=>console.log(`Server Listening at http://localhost:${port}`));