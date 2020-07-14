// 引入 express模块
const express = require('express');
// 引入 express.Router实例化router对象
const rooter = express.Router();


//显示首页 '/' 代表请求的是根目录
rooter.get('/', (req, res) => {
	res.render('main/index');
})
//显示列表页 '/list' 代表请求的是根目录
rooter.get('/list', (req, res) => {
	res.render('main/list');
})
//显示详情页 /detail 代表请求的是详情页
rooter.get('/detail', (req, res) => {
	res.render('main/detail');
})


// 导出模块
module.exports = rooter;