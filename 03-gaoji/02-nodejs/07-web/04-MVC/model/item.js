const fs = require('fs');
const path = require('path');
const util = require('util');

const filepath = path.normalize(__dirname+'/../data/item.json');

// 异步处理获取数据
const readfile = util.promisify(fs.readFile);

// 异步处理添加数据
const writefile = util.promisify(fs.writeFile);

// 1.获取数据
async function get(){
	// 1.读取文件数据
	const data = await readfile(filepath,{flag:'r',encoding:'utf-8'});
	// 2.将数据转化为数组
	const arr = JSON.parse(data);
	// 3.将数据返回
	return arr;
}

// 2.添加数据
async function add(task){
	// console.log(task);
	// 1.读取数据
	const data = await readfile(filepath,{flag:'r',encoding:'utf-8'});// 获取的数据为字符串
	// 2.将数组字符串转化为 真数组
	const arr = JSON.parse(data);
	// 3.生成任务对象并添加到数组中
	const obj = {
		id:Date.now().toString(),// toString() 方法是将数组转为字符串
		task:task
	}
	arr.push(obj);
	// 4.将最新的数据覆盖写入到文件中
	await writefile(filepath,JSON.stringify(arr));
	// 5.返回任务对象
	return obj;
}
// 3.删除数据

module.exports = {
	get,
	add,
}