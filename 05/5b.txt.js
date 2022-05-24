const http = require('http');
var lib = require("./library.js");
const server = http.createServer(function(request,response){

    if (request.url==="/today") {
        response.writeHead(200,{"Content-Type":"text/plain"});
        lib.func1();   
    } else 
    if (request.url==="run") {
        response.writeHead(200,{"Content-Type":"text/plain"});
        lib.func4(); 
    } else
    {
        response.writeHead(200,{"Content-Type":"text/plain"});
        lib.func5();
    }

    });

server.listen(8000,"127.0.0.1");
console.log("server up");