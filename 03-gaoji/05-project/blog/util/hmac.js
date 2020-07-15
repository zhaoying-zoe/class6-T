const crypto = require('crypto');

module.exports = (str)=>{
	const hmac = crypto.createHmac('sha512', 'sdadagfasdgfasff');
	//加密明文
	hmac.update(str);
	//生成密文并返回
	return hmac.digest('hex')
}