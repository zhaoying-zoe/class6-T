const express = require('express');
const app = express();
const mongoose = require('mongoose');
const swig = require('swig');
const bodyParser = require('body-parser');

const Cookies = require('cookies'); // 引入 cookies
const session = require('express-session');// 引入 express-session
const MongoStore = require("connect-mongo")(session); //引入 MongoStore

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

/* --------------Cookies 开始-------------- */
// 利用express-session
app.use(session({
    //设置cookie名称
    name:'user',
    //用它来对session cookie签名，防止篡改
    secret:'zhuzhu',
    //强制保存session即使它并没有变化
    resave: true,
    //强制将未初始化的session存储
    saveUninitialized: true, 
    //如果为true,则每次请求都更新cookie的过期时间
    rolling:true,
    //cookie过期时间 1天
    cookie:{maxAge:1000*60*60*24},
    //设置session存储在数据库中
    store:new MongoStore({ mongooseConnection: mongoose.connection })   
}))
/*
// 利用cookie
app.use('',(req,res,next)=>{
	// 在req上生成cookies实例,这样所有的路由都可以通过req操作cookies
	req.cookies = new Cookies(req,res);
	// console.log(cookies);// 查看cookies实例
	// cookies.set('userInfo',JSON.stringify(result.data))
	
	// 获取前台cookie并验证
	// console.log(req.cookies.get('userInfo'));// 字符串
	let userInfo = {};
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'));
	}
	// 把前台获取的cookie保存在req.userInfo上,后面的路由可以通过req.userInfo获取前台路由
	req.userInfo = userInfo;


	next();
})
*/
// 利用session
app.use('',(req,res,next)=>{
	// 把前台获取的cookie保存在req.userInfo上,后面的路由可以通过req.userInfo获取前台路由
	req.userInfo = req.session.userInfo || {};


	next();
})
/* --------------Cookies 结束-------------- */

/*------------------配置路由开始----------------*/

// 处理主页路由
app.use('/',require('./routers/index.js'))
// 处理注册、登录路由
app.use('/user',require('./routers/user.js'))
// 处理进入管理员页面的路由
app.use('/admin',require('./routers/admin.js'))

/*------------------配置路由结束----------------*/


app.listen(3000, () => console.log('server is running in http://127.0.0.1:3000'))