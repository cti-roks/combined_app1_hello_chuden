const http = require('http');
const server = http.createServer((req, res) => {
  console.log('access');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello! Chuden!!from api app');
});

server.listen(8081, () => {
  console.log('Server is running at http://localhost:8081');
});
