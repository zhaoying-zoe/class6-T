const express = require('express');
const app = express();
const port = 3000;
const swig = require('swig');

//   路由模块化
// 用express.Router实例化一个router对象
// 使用router.METHOD(PATH, HANDLER)来处理路由
// 导出router对象
// 用app.use(PATH,router对象)来使用导出的router对象

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
// 5.渲染模板
	//第一个参数是相对于模板目录的文件
	//第二个参数是传递给模板的数据
	/*
app.get('/',(req,res)=>{
	// 用了模板后直接用render就行
    res.render('base',{
    	title:'这是一个神奇的网页',
    	name:'bob',
    	age:12,
    	friends:['jack','amy','frank','pig']
    })
})
*/

app.get('/',(req,res)=>{
	// 用了模板后直接用render就行
	res.render('index',{})
})
app.get('/list',(req,res)=>{
	// 用了模板后直接用render就行
	res.render('list',{})
})
app.listen(port, () => console.log('server is running in http://127.0.0.1:3000'))