// 定义ajax默认地址
export const SERVER = 'http://127.0.0.1:3000';
// 定义ajax相关配置
export const API_CONFIG = {
	login: 						['/sessions/users','post'],
	logout: 					['/sessions/users','delete'],
	getCounts: 					['/counts','get'],
	getUserList: 				['/users/list','get'],
	addCategories: 				['/categories','post'],
	getLevelCategories: 		['/categories/levelCategories','get'],
	getCategoriesList: 			['/categories/list','get'],
	getUpdataName: 				['/categories/name','put'],
	getUpdataMobileName: 		['/categories/mobileName','put'],
	getUpdataOrder: 			['/categories/order','put'],
	getIsShow: 			['/categories/isShow','put'],
}