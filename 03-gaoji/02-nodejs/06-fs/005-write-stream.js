

const fs = require('fs');

// 1.读取可写流 2.写入流 3.结束流 4.关闭流
// fs.createWriteStream(path[, options])
const ws = fs.createWriteStream('./005.txt');

ws.write('hello everyone',()=>{
	console.log('write stream ok');
})

ws.on('finish',()=>{
	console.log('finish write stream');
})

ws.on('close',()=>{
	console.log('close write stream');
})

ws.end();// 触发
