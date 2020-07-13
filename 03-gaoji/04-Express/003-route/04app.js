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
	// res.end('Hello World! get');
	// res.end('<h2>啦啦啦</h2>');
	// res.end({name:'tom',age:3});

	// res.json('Hello World! get');
	// res.json('<h2>啦啦啦</h2>');
	// res.json({name:'tom',age:3});// 转化为对象

	// res.send('Hello World! get');
	// res.send('<h2>啦啦啦</h2>');// 需要插入
	res.send({name:'tom',age:3});// 转化为对象

})
app.listen(port, () => console.log('server is running in http://127.0.0.1:3000'))