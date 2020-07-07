/*

// 如果未设置时间 则按顺序 
// 如果设置时间 setImmediate快于其他定时器

const t1 = setTimeout(()=>{
	console.log('timer t1 ...')
},200);
clearTimeout(t1);

const t2 = setInterval(()=>{
	console.log('timer t2 ...')
},1000);
clearInterval(t2);

const t3 = setImmediate(()=>{
	console.log('timer t3 ...')
});
*/


// after t5 ...
// process.nextTic+k ...
// timer t5 ...
// timer t4 ...
const t4 = setTimeout(()=>{
	console.log('timer t4 ...')
},0);

const t5 = setImmediate(()=>{
	console.log('timer t5 ...')
});

process.nextTick(()=>{// 异步最快
	console.log('process.nextTick ...')
});
console.log('after t5 ...')