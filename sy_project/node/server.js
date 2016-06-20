var PORT = 8080;
var http = require('http');
var server = http.createServer(function (request, response) {
    console.log("rquest")
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");