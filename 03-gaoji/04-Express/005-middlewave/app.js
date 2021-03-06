const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//   路由模块化
// 用express.Router实例化一个router对象
// 使用router.METHOD(PATH, HANDLER)来处理路由
// 导出router对象
// 用app.use(PATH,router对象)来使用导出的router对象

// 处理静态资源
app.use(express.static('public'));

// 设置了虚拟路径后,静态资源请求时需要加上虚拟路径
// app.use('/static', express.static('public'))

//处理post请求的中间件配置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/',(req, res) => {
	/*
	let body = ''
	req.on('data',(chunk)=>{
		body+=chunk
	})
	req.on('end',()=>{
		console.log(body)
	})
	*/
	console.log(req.body)

	res.send('post  response')
})

app.listen(port, () => console.log('server is running in http://127.0.0.1:3000'))