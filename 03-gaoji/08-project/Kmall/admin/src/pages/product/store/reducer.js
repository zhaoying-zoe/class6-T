import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	total:100,
	pageSize:5,
	current:1,
	isFetching:false,
	categories:[],
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
	return state
}