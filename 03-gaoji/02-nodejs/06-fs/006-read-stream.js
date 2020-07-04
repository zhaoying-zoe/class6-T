

const fs = require('fs');

// 1.读取可读流 2.写入流 3.结束流 4.关闭流
// fs.createReadStream(path[, options])
const ws = fs.createReadStream('./005.txt');

ws.on('finish',()=>{
	console.log('finish write stream');
})

ws.on('close',()=>{
	console.log('close write stream');
})

ws.end();// 触发
