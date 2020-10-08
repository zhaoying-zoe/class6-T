const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	// console.log(req.url);
	if(req.url == '/favicon.ico'){
		res.end('ok');
	}
	const filePath = './' + req.url;
	// console.log(filePath);
	fs.readFile(filePath,(err,data)=>{
		if(err){
			res.statusCode = 404;
			res.end('request err');
		}else if(data){
			res.end(data);
		}
	})
	// res.statusCode = 200;
	// res.setHeader('Content-Type', 'text/plain');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});