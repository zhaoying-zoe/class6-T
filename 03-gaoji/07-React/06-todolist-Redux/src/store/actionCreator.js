import {
	CHANGE_ITEM,
	ADD_ITEM,
	DEL_ITEM,
	AJAX_DATA
} from './reducerType.js';

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
export const getAjaxDataActioin = (data)=>({
	type:AJAX_DATA,// 根据type判断 增或者删 事件
	payload:data
})

export const getRequestDataActioin = ()=>{
	// 先发送ajax获取数据再
}