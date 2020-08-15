// 定义ajax相关配置
const API_CONFIG = {
	// 登录注册
	login: 						['/sessions/users','post'],
	getUsername: 				['/sessions/username','get'],
	logout: 					['/sessions/users','delete'],
	register: 					['/users','post'],
	// 个人中心
	checkUsername: 				['/users/checkUsername','get'],
	getUserInfo: 				['/sessions/users','get'],
	updatePassword: 			['/users','put'],
	// 首页加载数据
	getHomeCategories: 			['/categories/homeCategories','get']
}

module.exports = {
	API_CONFIG,
}