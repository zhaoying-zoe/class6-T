const http = require('http');// 引入核心模块(es6:const==var)

const hostname = '127.0.0.1';// ip地址
const port = 3000;// 端口号

const server = http.createServer((req, res)/*左边为箭头函数*/ => {
  res.statusCode = 200;// 200状态码
  res.setHeader('Content-Type', 'text/plain');// 返回数据时的响应头
  res.end('Hello xiao xue');// 传递参数 数据返回客户端
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});/*console.log("Server running at http://"+hostname+":"+port+"/");
});*/