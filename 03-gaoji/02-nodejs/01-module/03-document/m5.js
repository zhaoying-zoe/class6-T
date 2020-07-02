// console.log(module); // 模块
// console.log(module.exports); // 模块中的一个属性 值为{};
// console.log(exports === module.exports); // true

/*
exports.str = 'aaa';
exports.str1 = 'aaa1';
exports.fn = function(){
	console.log(2333);
}
*/

// 1.可以在module.exports对象或者exports对象上添加属性来导出值
/*
module.exports.str = 'aaa';
module.exports.str1 = 'aaa1';
module.exports.fn = function(){
	console.log(2333);
}
console.log(exports);
console.log(module.exports);
*/

console.log('get module.exports');

// 2.module.exports对象可以赋值一个对象来导出值,如果module.exports被赋值一个对象,则exports对象的值就不会被导出
str = 'aaa';
str1 = 'aaa1';
fn = function(){
	console.log(2333);
}
module.exports = {
	str,
	str1,
	fn
}