const express = require('express')
const app = express()
const port = 3000
const userRouter = require('./routers/user.js')
const blogRouter = require('./routers/blog.js')

//   路由模块化
// 用express.Router实例化一个router对象
// 使用router.METHOD(PATH, HANDLER)来处理路由
// 导出router对象
// 用app.use(PATH,router对象)来使用导出的router对象

// 处理静态资源
app.use(express.static('public'));

// 设置了虚拟路径后,静态资源请求时需要加上虚拟路径
// app.use('/static', express.static('public'))

// 中间件
app.all('',(req,res,next)=>{
	console.log('always to do something');
	// 想继续执行代码 必须调用next方法
	next();
})
app.all('',(req,res,next)=>{
	console.log('always to do something');
	// 想继续执行代码 必须调用next方法
})

app.get('/', (req, res) => res.send('Hello World! get'))
app.post('/', (req, res) => res.send('Hello World! post'))
app.put('/', (req, res) => res.send('Hello World! put'))
app.delete('/', (req, res) => res.send('Hello World! delete'))

app.listen(port, () => console.log('server is running in http://127.0.0.1:3000'))