const express = require('express')
const app = express()
const port = 3000

// 处理静态资源
app.use(express.static('public'));

// 设置了虚拟路径后,静态资源请求时需要加上虚拟路径
// app.use('/static', express.static('public'))

// 不是一个具体的http请求,代表所有的请求,主要用来 加载中间件
app.all('',(req,res,next)=>{
	console.log('always to do something');
	// 想继续执行代码 必须调用next方法
	next();
})

// app.method(path路径,handler方法)

app.get('/', (req, res,next) => {
	console.log('do something');
	//
	next();
},(req,res)=>{
	res.send('ggg');
})

app.post('/', (req, res) => res.send('Hello World! post'))
app.put('/', (req, res) => res.send('Hello World! put'))
app.delete('/', (req, res) => res.send('Hello World! delete'))

app.listen(port, () => console.log('server is running in http://127.0.0.1:3000'))