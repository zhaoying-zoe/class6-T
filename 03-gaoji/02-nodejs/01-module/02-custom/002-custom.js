// 自定义模块
// 1.安装对应模块的包
// 2.引入自定义模块
const $ = require('jquery'); 
// 3.使用自定义模块
console.log($+'');

// !核心模块的优先级高于自定义模块
const fs = require('fs');
console.log(fs);// 自定义的模块并不能被打印,所以说👆!