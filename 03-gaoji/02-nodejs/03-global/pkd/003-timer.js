setTimeout(()=>{
	console.log('timer t1');
},200);

console.log('global 222');

clearTimeout();



setInterval(()=>{
	console.log('timer t2');
},200)
clearInterval();

setImmediate(()=>{
	console.log('timer t3');
})
clearImmediate();

process.nextTick(()=>{
	console.log('timer t4');
})