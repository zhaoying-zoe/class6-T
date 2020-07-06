const fs = require('fs');
const path = require('path');
const util = require('util');

const filepath = path.normalize(__dirname+'/../data/item.json');

// 异步处理获取数据
const readFile = util.promisify(fs.readFile);
// const readFile = util.promisify(fs.readFile)

// 1.获取数据
async function get(){
	// 1.读取文件数据
	const data = await readFile(filepath,{flag:'r',encoding:'utf-8'});
	// 2.将数据转化为数组
	const arr = JSON.parse(data);
	// 3.将数据返回
	return arr;
}
module.exports = {
	get
}
// 2.添加数据
// 3.删除数据

