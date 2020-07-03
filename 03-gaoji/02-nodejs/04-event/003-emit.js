const EventEmmitter = require('events');
class MyEmmitter extends EventEmmitter{};
const emitter =  new MyEmmitter();
emitter.on('test',(attr1,attr2)=>{
	console.log(attr1,attr2)
})
// emitter.emit('test');// 什么都不传入则为undefined
// emitter.emit('test','aaa','bbb');//aaa bbb
const arr = ['aaa1','bbb1'];
emitter.emit('test',...arr);// 传入的数组参数直接写就行 不用加'' 或 [];