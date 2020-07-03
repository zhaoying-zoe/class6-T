const EventEmmitter = require('events');
class MyEmmitter extends EventEmmitter{};
const emitter =  new MyEmmitter();



Listener1 = ()=>{
	console.log('Listener1')
}
Listener2 = ()=>{
	console.log('Listener2')
}
emitter.addListener('test',Listener1);

emitter.addListener('test',Listener2)

emitter.off('test',Listener1);
emitter.removeListener('test',Listener2);

// emitter.removeListener和emitter.off是同一个方法
console.log(emitter.removeListener === emitter.off);// true4
emitter.emit('test');