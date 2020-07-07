// crypto.createHmac(algorithm, key[, options])

const crypto = require('crypto');// 引入模块


// 引入crypto里的加密方法
// const hmac = crypto.createHmac('sha256', '2333');// 2333: 自己添加的字符串 不易被破解 
const hmac = crypto.createHmac('sha512', '2333');// 2333: 自己添加的字符串 不易被破解 

console.log('123456');

// 1.hash.update(data[, inputEncoding]) 
// 2.使用给定的 data 更新哈希的内容，该数据的字符编码在 inputEncoding 中给出。
hmac.update('123456');

// 1.hash.digest([encoding]) 计算传入要被哈希（使用 hash.update() 方法）的所有数据的摘要。 
// 2.如果提供了 encoding，则返回字符串，否则返回 Buffer。
console.log(hmac.digest('hex'));