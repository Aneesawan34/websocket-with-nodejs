const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors:{
        origin:"*"
    }
})

app.use(express.json());
app.use(cors);

io.on("connection", (socket)=>{
    console.log("connected");
})


// app.get("/", (req, res)=>{
//     res.send("Hello World");
// })
server.listen(port, ()=>{
    console.log("App is listen on ", port);
});