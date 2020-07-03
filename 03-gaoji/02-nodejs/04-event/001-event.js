const EventEmitter = require('events');//返回的是一个类
// const EventEmitter = require('events');
console.log(EventEmitter);
// 1.生成实例
const emmiter = new EventEmitter();
// 2.绑定事件
emmiter.on('ppd',()=>{
	console.log(233);
})
// 3.监听事件
emmiter.emit('ppd');