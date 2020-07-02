// $ function (exports, require, module, __filename, __dirname) {
// __filename 当前模块文件的绝对路径
// module 当前的模块信息
// exports module.exports对象,用来导出模块
// require() 引入模块
// }

// console.log(arguments.callee+'');// 所有的代码都写在这里👆


//__dirname 当前模块的文件夹名
console.log(__dirname);
// __filename 当前模块文件的绝对路径
console.log(__filename);
// module 当前的模块信息
console.log(module);
// exports module.exports对象,用来导出模块
console.log(exports);
// require() 引入模块
console.log(require);

