

// 同步写文件

const fs = require('fs');// 引入文件系统

// 逐步操作

/*
// 1.打开文件 fs.openSync(path[, flags, mode])
	const fd = fs.openSync('./003.txt','r');
// 2.读取文件 fs.readSync(fd, buffer, offset, length, position)
	const buf = Buffer.alloc(100);// 定义长度为100的容器buffer
	fs.readSync(fd,buf,0,50,0);// (读取的文件,把文件里的字符存入到容器,偏移值,读取的长度,读取的位置)
	console.log(buf.toString());// 把buffer转为字符串
// 3.关闭文件 fs.closeSync(fd)
	fs.closeSync(fd);
*/



// 合并操作

const buf = fs.readFileSync('./003.txt',{flag:'r',encoding:'utf-8'});// encoding:'utf-8'  转为字符串
// console.log(buf.toString());// buffer转为字符串
console.log(buf);
