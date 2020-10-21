const http = require('http');// 核心模块
const fs = require('fs');// 核心模块
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');// 核心模块

const server = http.createServer((req, res) => {
	// 浏览器请求的url (req.url)
	// console.log(req.url);

	// 发送数据时使用的方法 (req.method)
	// console.log(req.method);
	if(req.method == "POST"){
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		})

		req.on('end',()=>{
			// console.log(body);
			res.end(body);
		})
	}else if(req.method == "GET"){ 
		// console.log(req.url);
		if(req.url.search(/\?/) != -1){
			// 1. search()方法用于检索字符串中指定的子字符串
			// 2. 或检索与正则表达式相匹配的子字符串
			//  String.srarch() == -1 : 表示被检索的字符串中无法检索到 \? 
			//  String.srarch() != -1 ： 表示被检索的字符串中检索的结果是 /?name=tom
			const parm = url.parse(req.url,true).query;// 这个数据是一个对象
			// console.log(parm);
			// 把对象转成字符串
			const objToJson = JSON.stringify(parm);
			// 因为传递到前台的数据必须为字符串
			res.end(objToJson);
		}else{
			// console.log(rul.parse);
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
		}

	}
});

server.listen(port, hostname, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});