// https://api.mall.kuazhu.com//floors?limit=10

// 定义ajax相关配置
const API_CONFIG = {
	// 首页加载数据
	getPositionAds: 			['/ads/positionAds','get'],
	getCategoryIcons: 			['/categories/arrayCategories','get'],
	getFloors: 					['/floors?limit=10','get'],
	// 商品列表页面
	getListIcons: 				['/categories/childArrayCategories','get'],
	// 获取分类列表页面
	getShopList: 				['/products/list','get'],
	// 获取商品详情
	getDetail: 					['/products/detail','get'],
}

module.exports = {
	API_CONFIG,
}