const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
const url = require('url');
const { get,add } = require('./model/item.js');
const swig = require('swig');// 引入页面模板
const querystring = require('querystring');// 引入字符串数据 转 对象模板

const server = http.createServer((req,res)=>{
	//处理静态资源
	//1.获取请求地址
	const filePath = req.url;
	// console.log('filePath::',filePath);
	const parse = url.parse(filePath,true);
	// console.log('parse',parse);
	const parsename = parse.pathname;
	// console.log('parsename',parsename);


	if(parsename == '/index.html' || parsename == '/'){
		get()
		.then(data=>{
			const fliename = path.normalize(__dirname+'/static/index.html');
			const template = swig.compileFile(fliename);// 引入swig创建html的方法
			const html = template({// 定义初始的html模板
				data:data// 传入data数据
			})
			// console.log(html);
			res.end(html);// 把创建的模板插入到页面
		})
		.catch(err=>{
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.end('<h1>请求的地址出错啦!</h1>');
		})
	}else if(parsename == '/add'){
		// 获取前台输入的数据
		// 1.定义变量存数据
		let body = '';
		// 2.监听data事件
		req.on('data',(chunk=>{
			body += chunk;
		}))
		// 3.监听end事件
		req.on('end',()=>{
			const query = querystring.parse(body);
			// 将任务添加到后台文件中
			add(query.task)
			.then(data=>{
				res.end(JSON.stringify({
					code:0,
					message:'添加任务成功',
					data:data
				}))
			})
			.catch(err=>{
				res.end(JSON.stringify({
					code:1,
					message:'添加任务失败'
				}))
			})
		})
	}else{
		const fliename = path.normalize(__dirname+'/static/'+filePath);
		// console.log('parsename',parsename);

		// console.log('fliename::',fliename);
		//2.根据文件地址读取文件
		fs.readFile(fliename,{encoding:'utf-8'},(err,data)=>{
			if(err){
				res.statusCode = 404;
				res.setHeader('Content-Type', 'text/html;charset=utf-8');
				res.end('<h1>请求的地址出错啦!</h1>')
			}else{
				// console.log(data);
				//根据不同的文件设置文档类型
				//根据不同的后缀名设置文档类型
				// .css text/css
				// .html text/html
				// 获取文件后缀名
				const extname = path.extname(filePath);
				// console.log('extname::',extname);
				mimeType = mime[extname];
				// console.log('mimeType::',mimeType)

				res.statusCode = 200;
				res.setHeader('Content-Type', mimeType+';charset=utf-8');
				res.end(data)
			}
		})
	}





	// res.end('good');
});


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in http://127.0.0.1:3000');
})