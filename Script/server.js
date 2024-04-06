const display = require('node-kernel');
const fs = require('fs');
const http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/HTML', });
  request.
response.end(`<h1>Hello</h1>`);
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');