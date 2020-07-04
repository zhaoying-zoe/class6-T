const fs = require('fs');

// 同步读写文件

// 逐步方法
/*
// 1.读取文件 fs.openSync(path[, flags, mode])
const fd = fs.openSync('./001.txt','a');
// 2.写入并保存 fs.writeSync(fd, string[, position[, encoding]])
fs.writeSync(fd,'hello 办单');
// 3.关闭文件 fs.closeSync(fd)
fs.closeSync(fd);
*/


// 合并方法
// fs.writeFileSync(file, data[, options])
fs.writeFileSync('./001.txt','hello',{flag:'a'});