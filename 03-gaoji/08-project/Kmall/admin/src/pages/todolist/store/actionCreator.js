// 属于creator的一些方法的组件

import {
	CHANGE_ITEM,
	ADD_ITEM,
	DEL_ITEM,
	AJAX_DATA
} from './reducerType.js';
import axios from 'axios';

export const getChangeItemActioin = (val)=>{
	return {
		type:CHANGE_ITEM,// 根据type判断 增或者删 事件
		payload:val// 接收输入框中的值
	}
}
export const getAddItemActioin = ()=>({
	type:ADD_ITEM// 根据type判断 增或者删 事件
})
export const getDelItemActioin = (index)=>({
	type:DEL_ITEM,// 根据type判断 增或者删 事件
	payload:index// 接收输入框中的值
})
// 派发action的方法
export const getAjaxDataActioin = (data)=>({
	type:AJAX_DATA,// 根据type判断 增或者删 事件
	payload:data
})

export const getRequestDataActioin = ()=>{
	// 返回一个函数,函数内部发送ajax
	return (dispatch,getState)=>{
		// console.log(getState);
		// 先发送ajax获取数据再
		axios.get('http://127.0.0.1:3000')
		.then(result=>{
			// console.log(result);
			// 在这里真正派发action
			dispatch(getAjaxDataActioin(result.data));
		})
		.catch(err=>{
			console.log(err);
		})
	}

}