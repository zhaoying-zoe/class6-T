const http = require('http');
const server = http.createServer((req,res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');// 请求头
	res.end(JSON.stringify(['奥特曼','猪猪侠','闪电小子','葫芦娃']));
	// res.end('Hello World');
})


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000 ');
})

/*
const http = require('http');

const hostname = '10.214.39.251';
const port = 3000;

const server = http.createServer((req, res) => {
	console.log('req.url',req.url);// 页面中输入的url路径
	console.log('req.method',req.method);// Get
	res.statusCode = 200;// 状态码
	res.setHeader('Content-Type', 'text/plain');// 请求头
	res.end('Hello World');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
*/
