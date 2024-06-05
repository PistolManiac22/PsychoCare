const fs = require('fs');
const http = require('http');

// if (fs.existsSync('./data')) {
//   fs.opendir('./data', (err) => {console.log(err)})
//   fs.createWriteStream('./data', (err) => {console.log});
// }else{
//   fs.mkdir('./data', (err) => {
//     console.log(err);})
// }

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/HTML', });
  response.
  response.end().listen(8081);
  console.log('Server running at http://127.0.0.1:8081/');})