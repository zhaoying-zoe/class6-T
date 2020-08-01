/*
* @Author: Chen
* @Date:   2019-12-02 16:52:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-03 17:45:26
*/
import axios from 'axios'
import * as types from './actionTypes.js'
import { setLocalStorage } from 'util';
import { message } from 'antd';// 引入全局提示,直接用

export const getChangeItemAction = (val)=>({
	type:types.CHANGE_ITEM,
	payload:val
})
export const getAddItemAction = ()=>({
	type:types.ADD_ITEM
})
export const getDeleteItemAction = (index)=>({
	type:types.DEL_ITEM,
	payload:index
})

const getLoadInitAction = (data) =>({
	type:types.LOAD_DATA,
	payload:data
})

export const getLoginAction = (data)=>{
	return (dispatch,getState)=>{
		data.role = 'admin';
		// 先发送ajax再派送action
		axios({
			method:'post',
			url:'http://127.0.0.1:3000/sessions/users',// 请求的地址
			data:data
		})
		.then(result=>{
			// 派发action
			// dispatch(getLoadInitAction(result.data));
			console.log(result);
			const data = result.data;
			if(data.code == 0){// 登陆成功、
				// 1.保存用户状态
				setLocalStorage(data.data.username)
				// 2.登录成功,跳转到管理员首页
				// window.location.href = '/';
			}else{// 登录失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('登录失败,请稍候再试!');
		})
	}
}
