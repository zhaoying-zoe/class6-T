const EventEmitter = require('events');//返回的是一个类
// 1.生成实例
class MyEmitter extends EventEmitter{};
const myEvent = new MyEmitter();
// 2.监听事件
myEvent.on('ppd',()=>{
	console.log(233);
})
myEvent.addListener('ppd',()=>{
	console.log(233);
})
myEvent.once('ppd',()=>{// 多次调用也只会打印一次
	console.log(233);
})
myEvent.once('ppd',()=>{
	console.log(233);
})
myEvent.once('ppd',()=>{
	console.log(233);
})

// emitter.addListener和emitter.on(eventName, listener)是同一个方法
console.log(myEvent.addListener === myEvent.on);// true

// 3.触发事件
myEvent.emit('ppd');


// on事件绑定最多只能有10个
// emitter.addListener和emitter.on(eventName, listener)是同一个方法
// 一个EventEmitter对象默认最大可以有10个监听,可以通过emitter.setMaxListeners(n)来设置最大监听数
/*
myEvent.on('ppd',()=>{
	console.log(233);
})
myEvent.on('ppd',()=>{
	console.log(233);
})
myEvent.on('ppd',()=>{
	console.log(233);
})
myEvent.on('ppd',()=>{
	console.log(233);
})
myEvent.on('ppd',()=>{
	console.log(233);
})
myEvent.on('ppd',()=>{
	console.log(233);
})
myEvent.on('ppd',()=>{
	console.log(233);
})
myEvent.on('ppd',()=>{
	console.log(233);
})
myEvent.on('ppd',()=>{
	console.log(233);
})
myEvent.on('ppd',()=>{
	console.log(233);
})
*/