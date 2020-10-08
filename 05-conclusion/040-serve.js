const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
	// 设置允许访问的源(*代表所有源都可以访问)
	res.setHeader("Access-Control-Allow-Origin",'*');
	// res.setHeader("Access-Control-Allow-Credentials",布尔值)
  	// res.statusCode = 200;
  	// res.setHeader('Content-Type', 'text/plain');
  	res.end('Hello World');
});

server.listen(port, hostname, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});