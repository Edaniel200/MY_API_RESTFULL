"use strict";

let http = require("http");
let hostname = "127.0.0.1";
let port = 1998;
let messageServer = `Server running at http://${hostname}:${port}`;


let server = http.createServer(webServer).listen(1998, "127.0.0.1", message(messageServer));

function webServer(req, res){
    
    res.writeHead(200, {"content-type" : "text/plain"});
    res.end("Comenzando API RESTFULL");
}

function message(messageServer){
    console.log(messageServer);
}

