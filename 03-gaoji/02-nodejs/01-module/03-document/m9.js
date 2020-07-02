// 1.Node对所有加载过的模块对象都会缓存 
// 2.Node对二次加载的模块一律采用缓存优先

const req = require('./m5.js');// 虽然引入两次m5文件,但是二次加载一律采用缓存优先
const req1 = require('./m5.js');
