// 引入 express模块
const express = require('express');
// 引入 express.Router实例化router对象
const rooter = express.Router();


//显示首页 '/' 代表请求的是根目录
rooter.get('/', (req, res) => {
	res.render('main/index');
})

// 导出模块
module.exports = rooter;