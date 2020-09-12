// https://api.mall.kuazhu.com//floors?limit=10

// 定义ajax相关配置
const API_CONFIG = {
	// 首页加载数据
	getPositionAds: 			['/ads/positionAds','get'],
	getCategoryIcons: 			['/categories/arrayCategories','get'],
	getFloors: 					['/floors?limit=10','get'],
	// 列表页
	getListIcons: 				['/categories/childArrayCategories','get'],
	getShopList: 				['/products/list','get'],
}

module.exports = {
	API_CONFIG,
}