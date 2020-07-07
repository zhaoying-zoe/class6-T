// const str = 'aaa'; // 会报错
global.str = 'aaa'; // 只能定义在global的全局变量里


// 自定义模块的加载路径可以通过module.paths查看 
// console.log(module.paths); // 👇
/* 
[
  'E:\\class6-T\\03-gaoji\\02-nodejs\\01-module\\03-document\\node_modules',
  'E:\\class6-T\\03-gaoji\\02-nodejs\\01-module\\node_modules',
  'E:\\class6-T\\03-gaoji\\02-nodejs\\node_modules',
  'E:\\class6-T\\03-gaoji\\node_modules',
  'E:\\class6-T\\node_modules',
  'E:\\node_modules'
]
*/
