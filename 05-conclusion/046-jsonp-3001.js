const http = require('http');// 核心模块
const hostname = '127.0.0.1';
const port = 3001;
const url = require('url');// 核心模块

const server = http.createServer((req, res) => {
	let parm = url.parse(req.url,true).query;// 将url转化为对象
	// console.log(parm);
	// console.log(req.url);
	let data = '{"name":"Tom","age":19}';
	res.end(parm.getData+'('+data+')');
});

server.listen(port, hostname, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});