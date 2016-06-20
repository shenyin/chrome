var PORT = 8612;
var http = require("http");
var url = require("url");

function start(route) {
	http.createServer(function(request, response) {
		var handler=route(request.url);
		handler.run(request,response);
	}).listen(PORT);
	console.log("Server runing at port: " + PORT + ".");
}

exports.start=start;