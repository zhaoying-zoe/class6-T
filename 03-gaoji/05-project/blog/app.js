const express = require('express');
const app = express();
const mongoose = require('mongoose');
const swig = require('swig');
const bodyParser = require('body-parser');

// 处理静态资源
app.use(express.static('public'));

/* --------------配置连接数据库 开始-------------- */
// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/blog',{useNewUrlParser:true,useUnifiedTopology: true});
// 连接db
const db = mongoose.connection;
// 连接db失败
db.on('error', (err)=>{
	console.log(err);
	throw err;// 抛出错误
});
// 连接db成功
db.once('open', ()=> {
  	console.log(" Connected success!");


});
/* --------------配置连接数据库 结束-------------- */

/*-----------------中间件配置开始-------------------*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//配置过后post和put请求的所有参数会被存储在req.body上
/*-----------------中间件配置结束-------------------*/

/* --------------配置模板引擎 开始-------------- */

// 1.设置缓存
	//开发阶段设置不走缓存
swig.setDefaults({
  cache: false
})
// 2.配置应用模板
	// 第一个参数是模板名称,同时也是模板文件的扩展名
	// 第二个参数是解析模板的方法
app.engine('html', swig.renderFile);
// 3.配置模板的存放目录
	// 第一参数必须是views
	// 第二个参数是模板存放的目录
app.set('views', './views');
// 4.注册模板引擎
	// 第一个参数必须是view engine
	// 第二个参数是模板名称,也就是app.engine的第一个参数
app.set('view engine', 'html');

/* --------------配置模板引擎 结束-------------- */

/*------------------配置路由开始----------------*/

// 处理主页路由
app.use('/',require('./routers/index.js'))
// 处理注册、登录路由
app.use('/user',require('./routers/user.js'))

/*------------------配置路由结束----------------*/


app.listen(3000, () => console.log('server is running in http://127.0.0.1:3000'))