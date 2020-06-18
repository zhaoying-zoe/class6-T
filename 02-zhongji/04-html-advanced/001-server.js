var http = require('http');// 引入核心模块

var fs = require('fs');// 核心模块 专门用来读文件

var server = http.createServer(function(req,res){
	// console.log(req.headers.cookie);
	// res.setHeader('Set-Cookie','name=tom');// 创建Cookie
	// var oDate = new Date('2020-6-18 11:13:00').toUTCString()
	// res.setHeader('Set-Cookie','name=tom;Expires='+oDate);
	// res.setHeader('Set-Cookie','name=tom;MAX-Age='+10);
	
	if(req.url == './favicon.ico'){
		res.end('ok')
	}
	var filePath = './' + req.url;// ./ 是当前文件夹
	fs.readFile(filePath,function(err,data){
		if(err){// 如果页面访问错误
			res.statusCode = 404;// 200状态码
			res.end('Not Found')
		}else{// 页面访问成功
			res.end(data);
		}
	})
});
server.listen(3000,'127.0.0.1',function(){
	console.log('server is running at http://127.0.0.1:3000');
})