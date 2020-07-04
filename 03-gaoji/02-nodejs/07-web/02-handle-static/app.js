const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	// 规范化路径
	const filePath = req.url;
	const fileName =path.normalize(__dirname+'/static/' +filePath);// __dirname:当前路径
	
	
	// console.log(fileName);
	fs.readFile(fileName,{flag:'r',encoding:'utf-8'},(err,data)=>{
		if(err){
			res.statusCode = 404;
			res.setHeader('content-Type','text/html;charset=utf-8');
			res.end('我的天啊！出错啦！');
		}else{
			res.statusCode = 200;
			res.setHeader('content-Type','text/html;charset=utf-8');
			res.end(data);
		}
});
	// console.log('req.url',req.url);// 网页中请求的地址
	// console.log('path',path);
	
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000/');
})