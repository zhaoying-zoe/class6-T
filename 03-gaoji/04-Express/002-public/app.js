const express = require('express')
const app = express()
const port = 3000

// 处理静态资源
// app.use(express.static('public'));

// 设置了虚拟路径后,静态资源请求时需要加上虚拟路径
app.use('/static', express.static('public'))

app.get('/', (req, res) => res.send('Hello World! 笨猪猪'))

app.listen(port, () => console.log('server is running in http://127.0.0.1:3000'))