// crypto.createHash(algorithm[, options])

const crypto = require('crypto');// 引入模块

// 引入crypto里的加密方法
const hash = crypto.createHash('md5');// 加密较短
// const hash = crypto.createHash('sha256');// 加密较长
// const hash = crypto.createHash('sha512');// 加密更长

console.log('123456');

// 1.hash.update(data[, inputEncoding]) 
// 2.使用给定的 data 更新哈希的内容，该数据的字符编码在 inputEncoding 中给出。
hash.update('123456');

// 1.hash.digest([encoding]) 计算传入要被哈希（使用 hash.update() 方法）的所有数据的摘要。 
// 2.如果提供了 encoding，则返回字符串，否则返回 Buffer。
console.log(hash.digest('hex'));