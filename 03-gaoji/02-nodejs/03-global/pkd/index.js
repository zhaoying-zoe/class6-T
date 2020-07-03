const fs = require('fs');// 引入fs

const fileName = process.argv[2];// process.argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数
console.log(fileName);// 

fs.mkdirSync('./'+fileName);
fs.mkdirSync('./'+fileName+'/css');// 在当前文件夹下创建css文件夹
fs.mkdirSync('./'+fileName+'/js');// 在当前文件夹下创建js文件夹
fs.mkdirSync('./'+fileName+'/image');// 在当前文件夹下创建image文件夹