import axios from 'axios';
import * as types from './actionTypes.js';
import apiObj from 'api/index.js';
import { message } from 'antd';// 引入全局提示,直接用


// 处理新增分类
const setLevelCategories = (data) =>({
	type:types.SET_LEVEL_CATEGORIES,
	payload:data
})

export const getAddCategoriesAction = (values)=>{
	return (dispatch,getState)=>{
		// 先发送ajax再派送action
		apiObj.addCategories(values)
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 添加成功
				message.success('添加成功!');
				// 1.派发action,将数据存到store
				dispatch(setLevelCategories(data.data));
				// 2.刷新页面
				window.location.reload();
			}else{// 添加失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
	}
}

// 处理父级分类
export const getLevelCategoriesAction = ()=>{
	return (dispatch,getState)=>{
		// 先发送ajax再派送action
		apiObj.getLevelCategories({
			// 限制显示分类等级(后台默认为2)
			level:2
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 添加成功
				// 1.派发action,将数据存到store
				console.log(data);
				dispatch(setLevelCategories(data.data));
			}else{// 添加失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
	}
}

//处理分类列表分页数据
// 获取数据
const setPageAction = (data) =>({
	type:types.GET_PAGE,
	payload:data
})
// 分页器开始加载图标
const getCategoriesStartAction = () =>({
	type:types.REQUEST_START_ACTION,
})
// 分页器结束加载图标
const getCategoriesDoneAction  = () =>({
	type:types.REQUEST_DONE_ACTION,
})

export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		// 发送ajax前先派送加载图标的action
		dispatch(getCategoriesStartAction());
		// 先发送ajax再派送action
		apiObj.getCategoriesList({
			page:page
		})
		.then(result=>{
			console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 1.派发action,将数据存到store
				// 获取数据
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
			dispatch(getCategoriesDoneAction());
		})
	}
}