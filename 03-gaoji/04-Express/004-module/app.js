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

// app.use(express.static('public')) 是读取文件(使用文件)
app.use('/user',userRouter)
app.use('/blog',blogRouter)

/*
app.get('/user', (req, res) => res.send('Hello World! get User'))
app.post('/user', (req, res) => res.send('Hello World! post User'))
app.put('/user', (req, res) => res.send('Hello World! put User'))
app.delete('/user', (req, res) => res.send('Hello World! delete User'))

app.get('/blog', (req, res) => res.send('Hello World! get Blog'))
app.post('/blog', (req, res) => res.send('Hello World! post Blog'))
app.put('/blog', (req, res) => res.send('Hello World! put Blog'))
app.delete('/blog', (req, res) => res.send('Hello World! delete Blog'))
*/

app.listen(port, () => console.log('server is running in http://127.0.0.1:3000'))