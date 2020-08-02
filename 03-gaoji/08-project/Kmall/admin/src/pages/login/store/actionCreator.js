/*
* @Author: Chen
* @Date:   2019-12-02 16:52:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-03 17:45:26
*/
import axios from 'axios'
import { setLocalStorage } from 'util';
import { message } from 'antd';// 引入全局提示,直接用

import {
	LOGIN_START_ACTIOIN,
	LOGIN_DONE_ACTIOIN
} from './actionTypes.js'

const getLoginStartAction = () =>({
	type:LOGIN_START_ACTIOIN,
})
const getLoginDoneAction = () =>({
	type:LOGIN_DONE_ACTIOIN,
})

export const getLoginAction = (data)=>{
	return (dispatch,getState)=>{
		// 发送ajax前,先派发action改变登录状态
		dispatch(getLoginStartAction());
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
				window.location.href = '/';
			}else{// 登录失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('登录失败,请稍候再试!');
		})
		.finally(()=>{
			// 无论请求成功还是失败,取消登陆doading状态
			dispatch(getLoginDoneAction());
		})
	}
}
