// 引入 express模块
const express = require('express');
// 引入 express.Router实例化router对象
const rooter = express.Router();



rooter.get('/', (req, res) => res.send('Hello World! get Blog'))
rooter.post('/', (req, res) => res.send('Hello World! post Blog'))
rooter.put('/', (req, res) => res.send('Hello World! put Blog'))
rooter.delete('/', (req, res) => res.send('Hello World! delete Blog'))

// 导出模块
module.exports = rooter;