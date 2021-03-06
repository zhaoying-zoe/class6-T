// 定义ajax默认地址
export const SERVER = 'http://127.0.0.1:3000';
export const UPLOAD_IMAGES = SERVER+'/products/images';
export const UPLOAD_DETAIL_IMAGES = SERVER+'/products/detailImages';
export const UPLOAD_AD_IMAGE = SERVER + '/ads/image'
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
	getIsShow: 					['/categories/isShow','put'],

	addProducts: 				['/products','post'],
	getProductsList: 			['/products/list','get'],
	updateProductsOrder: 		['/products/order','put'],
	updateProductsIsShow: 		['/products/isShow','put'],
	updateProductsStatus: 		['/products/status','put'],
	updateProductsIsHot: 		['/products/isHot','put'],
	getProductDetail: 			['/products/detail','get'],
	editProducts: 				['/products','put'],
	//广告api
	getAdsList:                  	["/ads/list","get"],
    getAdsDetail:                	["/ads/detail","get"],
    addAds:                      	["/ads","post"],
    updateAds:                  	["/ads","put"],
    updateAdsOrder:              	["/ads/order","put"],
    updateAdsIsShow:             	["/ads/isShow","put"],
}