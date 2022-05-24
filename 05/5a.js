const http = require('http');
const server = http.createServer(function(request,response){

    if (request.url==="/today") {
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end("Today is your lucky day! ");   
    } else 
    if (request.url==="run") {
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end("Forest run! "); 
    } else
    {
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end("You are here: url="+ request.url); 
    }

    });

server.listen(8000,"127.0.0.1");
console.log("server up");