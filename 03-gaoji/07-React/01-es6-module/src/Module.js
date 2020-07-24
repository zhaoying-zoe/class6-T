console.log('this is Mosule file');



// 写法一
export const a = 1; // 传递的时候就定义变量(值)
// 写法二
const b = 2; // 先定义变量(值)再传递
export {
	b
};
// 写法三
const c = 3;
export {
	c
};
// 写法四
const e = 4; // 传递的时候可以重新定义变量名
export {
	e as f
};
// 写法五
// export default 1;

// 一个模块只能有一个默认输出，因此export
//  default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。

const h = 5;
export default h;