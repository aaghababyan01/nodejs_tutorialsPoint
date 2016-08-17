var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>hello</h1>');
	response.end('<b>Hello World</b>');

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');