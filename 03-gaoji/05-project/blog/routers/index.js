// 引入 express模块
const express = require('express');
// 引入 express.Router实例化router对象
const rooter = express.Router();


//显示首页 '/' 代表请求的是根目录
rooter.get('/', (req, res) => {
	// 获取前台cookie并验证
	// console.log(req.cookies.get('userInfo'));// 字符串
	/*
	let userInfo = {};
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'));
	}
	*/
	// console.log(userInfo);// 用户登录cookie 对象


	res.render('main/index',{
		// 把cookie信息返回到前台html页面
		userInfo:req.userInfo
	});
})
//显示列表页 '/list' 代表请求的是列表页
rooter.get('/list', (req, res) => {
	res.render('main/list',{
		// 把cookie信息返回到前台html页面
		userInfo:req.userInfo
	});
})
//显示详情页 /detail 代表请求的是详情页
rooter.get('/detail', (req, res) => {
	res.render('main/detail',{
		// 把cookie信息返回到前台html页面
		userInfo:req.userInfo
	});
})


// 导出模块
module.exports = rooter;