import axios from 'axios';
import * as types from './actionTypes.js';
import apiObj from 'api/index.js';
import { message } from 'antd';// 引入全局提示,直接用

// 获取 用户数据
const setPageAction = (data) =>({
	type:types.GET_PAGE,
	payload:data
})
// 分页器开始加载图标
const getCountsStartAction = () =>({
	type:types.COUNTS_START_ACTIOIN,
})
// 分页器结束加载图标
const getCountsDoneAction = () =>({
	type:types.COUNTS_DONE_ACTIOIN,
})

export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		// 发送ajax前先派送加载图标的action
		dispatch(getCountsStartAction());
		// 先发送ajax再派送action
		apiObj.getUserList({
			page:page
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 1.派发action,将数据存到store
				// 获取用户数据
				dispatch(setPageAction(data.data));
			}else{// 验证失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
		.finally(()=>{
			// 取消加载图标的action
			dispatch(getCountsDoneAction());
		})
	}
}