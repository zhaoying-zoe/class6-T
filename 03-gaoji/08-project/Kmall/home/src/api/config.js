// 定义ajax相关配置
const API_CONFIG = {
	login: 						['/sessions/users','post'],
	getUsername: 				['/sessions/username','get'],
	logout: 					['/sessions/users','delete'],
	register: 					['/users','post'],
	checkUsername: 				['/users/checkUsername','get'],
}

module.exports = {
	API_CONFIG,
}