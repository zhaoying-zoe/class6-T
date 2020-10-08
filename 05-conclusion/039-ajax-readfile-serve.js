// 引入核心模块http
const http = require('http');
// 引入核心模块fs
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	// 打印请求地址
	console.log(req.url);
	// 使请求的icon为默认值
	if(req.url == '/favicon.ico'){
		res.end('ok');
	}
  	// 定义文件地址
  	const filePath = './' + req.url;
  	// console.log(filePath)
  	// 1. 调用核心模块fs的readFile方法
  	// 2. (方法接收一个参数和一个回调函数(回调函数接收两个参数(err和data)))
  	fs.readFile(filePath,(err,data)=>{
  		if(err){
			// 请求错误时设置状态码404;
			res.statusCode = 404;
  			res.end('request err')
  		}else if(data){
  			res.end(data);
  		}

  	})
});

server.listen(port, hostname, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});