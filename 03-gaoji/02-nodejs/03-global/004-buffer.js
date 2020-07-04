const buf1 = Buffer.from('b');// <Buffer 62>;
// console.log(buf1);
const buf2 = Buffer.from('#ff6700'); //<Buffer 23 66 66 36 37 30 30>
console.log(buf2);
// Buffer实例.toString()
console.log(buf2.toString());
// Buffer.alloc
// 
const buf3 = Buffer.alloc(100)
console.log(buf3);
