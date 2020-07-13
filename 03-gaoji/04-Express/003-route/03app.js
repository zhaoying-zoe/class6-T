const express = require('express')
const app = express()
const port = 3000
const url = require('url')

// 处理静态资源
app.use(express.static('public'));

// 设置了虚拟路径后,静态资源请求时需要加上虚拟路径
// app.use('/static', express.static('public'))

// app.method(path路径,handler方法)


app.get('/',(req,res)=>{
	const parse = url.parse(req.url,true)
	console.log(parse.query)
	console.log(req.query)
	console.log(req.query)
	res.send('Hello World! get');
})


app.post('/', (req, res) => res.send('Hello World! post'))

app.listen(port, () => console.log('server is running in http://127.0.0.1:3000'))