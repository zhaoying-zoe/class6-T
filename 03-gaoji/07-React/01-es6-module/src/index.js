// 写法一
	import { a } from './Module.js';
	console.log('a =', a);
// 写法二
	import { b } from './Module.js';
	console.log('b =', b);
// 写法三
import { c as d } from './Module.js'; // 接收的变量可以重新定义变量名
// console.log('c =', c); // 报错
console.log('d =', d);
// 写法四
import { f } from './Module.js';
console.log('f =', f);
// 写法五
import g from './Module.js';
console.log('g =', g);

import h from './Module.js';
console.log('h =', h);


console.log('this is index file');
