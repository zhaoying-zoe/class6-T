import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	total:100,
	pageSize:5,
	current:1,
	isFetching:false,
})
import * as types from './actionTypes.js';

export default (state=defaultState,action)=>{
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
	if(action.type == types.COUNTS_START_ACTIOIN){
		// 2.转化成immutable数据
		return state.set('isFetching',true);
	}
	if(action.type == types.COUNTS_DONE_ACTIOIN){
		// 2.转化成immutable数据
		return state.set('isFetching',false);
	}
	return state
}