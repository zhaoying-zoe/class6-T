import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	total:100,
	pageSize:5,
	current:1,
	isFetching:false,
	categories:[],
	mainImage:'',
	Images:'',
	Detail:'',
	// 自定义组件验证
	MainImageValidateStatus:'',
	MainImageHelp:'',
	ImagesValidateStatus:'',
	ImagesHelp:'',

	category:'',
	name:'',
	description:'',
	price:'',
	stock:'',
	mainImage:'',
	images:'',
	detail:'',
})
import * as types from './actionTypes.js';

export default (state=defaultState,action)=>{
	// 处理分类列表
	if(action.type == types.GET_PAGE){
		// 1.将数据返回给页面(store → 页面)
		// 2.转化成immutable数据
		return state.merge({
			list:fromJS(action.payload.list),
			total:action.payload.total,
			pageSize:action.payload.pageSize,
			current:action.payload.current,
		});
	}
	if(action.type == types.REQUEST_START_ACTION){
		// 2.转化成immutable数据
		return state.set('isFetching',true);
	}
	if(action.type == types.REQUEST_DONE_ACTION){
		// 2.转化成immutable数据
		return state.set('isFetching',false);
	}

	// 处理设置分类数据
	if(action.type == types.SET_LEVEL_CATEGORIES){
		// 2.转化成immutable数据
		return state.set('categories',fromJS(action.payload));
	}

	// 处理自定义组件存值到store
	if(action.type == types.SET_MAIN_IMAGE){
		return state.merge({
			mainImage:fromJS(action.payload),
			MainImageValidateStatus:'',
			MainImageHelp:'',
		});
	}
	if(action.type == types.SET_IMAGES){
		return state.merge({
			Images:fromJS(action.payload),
			ImagesValidateStatus:'',
			ImagesHelp:'',
		});
	}
	if(action.type == types.SET_DETAIL){
		return state.set('Detail',fromJS(action.payload));
	}

	// 处理自定义组件校验
	if(action.type == types.SET_MAIN_IMAGE_ERR){
		return state.merge({
			MainImageValidateStatus:'error',
			MainImageHelp:'请添加封面图片!!',
		});
	}
	if(action.type == types.SET_IMAGES_ERR){
		return state.merge({
			ImagesValidateStatus:'error',
			ImagesHelp:'请添加商品图片!!',
		});
	}

	// 处理商品详情
	if(action.type == types.GET_PRODUCT_DETAIL){
		// 商品回填数据
		return state.merge({
			category:action.payload.category.name,
			name:action.payload.name,
			description:action.payload.description,
			detail:action.payload.detail,
			price:action.payload.price,
			stock:action.payload.stock,
			images:action.payload.images,
			mainImage:action.payload.mainImage,
		});
	}
	return state
}