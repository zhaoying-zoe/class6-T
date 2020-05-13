var http = require('http');// 引入核心模块

var fs = require('fs');// 核心模块 专门用来读文件

var server = http.createServer(function(req,res){
	console.log(req.url);
	if(req.url == './favicon.ico'){
		res.end('ok')
	}
	var filePath = './' + req.url;// ./ 是当前文件夹
	fs.readFile(filePath,function(err,data){
		if(err){// 如果页面访问错误
			res.end('Not Found')
		}else{// 页面访问成功
			res.end(data);
		}
	})
	// res.end('ok')
});
server.listen(3000,'127.0.0.1',function(){
	console.log('server is running at http://127.0.0.1:3000');
})

// var http = require('http');// 引入核心模块

// var fs = require('fs');// 核心模块 专门用来读文件

// var server = http.createServer((req,res) => {// es6回调匿名函数
// 	console.log(req.url);
// 	if(req.url == './favicon.ico'){
// 		res.end('ok')
// 	}
// 	var filePath = './' + req.url;// ./ 是当前文件夹
// 	fs.readFile(filePath,(err,data) => {
// 		if(err){// 如果页面访问错误
// 			res.end('Not Found')
// 		}else{// 页面访问成功
// 			res.end(data);
// 		}
// 	})
// 	// res.end('ok')
// });
// server.listen(3000,'127.0.0.1',function(){// 此处有错误的地方
// 	console.log('server is running at http://127.0.0.1:3000');
// })