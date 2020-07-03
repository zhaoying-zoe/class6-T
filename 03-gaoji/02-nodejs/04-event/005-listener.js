const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const emitter = new MyEmitter();

// 'newListener'事件,当有新的监听被添加时触发,回调函数接受两个参数分别是添加的事件名称和函数
emitter.on('newListener',(eventname,callback)=>{// eventname : 'show'  callback : ()=>{console.log('show...')}
	console.log('listener...');
	console.log(eventname);
	console.log(callback+'');
})

emitter.on('show',()=>{
	console.log('show...');
})