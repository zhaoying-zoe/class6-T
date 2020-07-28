// 定义初始化数据
const stateDefaultData = {
	list:['吃饭','睡觉','learn English'],
	task:''
}

import {
	CHANGE_ITEM,
	ADD_ITEM,
	DEL_ITEM
} from './reducerType.js';

/*
	1.reducer是一个纯函数(有固定输入和固定输出)
	2.reducer不能直接修改store中的state,store中的state只能由store管理
	3.getState方法获取的始终是store中的state
	4.reducer修改完数据后会返回一个新的newstate,store会根据这个newstate修改自身的state
 */


// state=stateDefaultData:给state赋予初始化的数据
export default (state=stateDefaultData,action,)=>{
	// console.log(state);// 
	// console.log(action);
	if(action.type == CHANGE_ITEM){
		// 错误写法 👇
		// state.task = action.payload + Math.random();
		// state.task = action.payload + Date.now();
		// state.task = action.payload;
		
		// 定义新的newState
		const newState = JSON.parse(JSON.stringify(state));
		newState.task = action.payload;
		// console.log(newState);
		return newState;
	}else if(action.type == 'add_item'){
		// 定义新的newState
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.task);// 把输入框中的值添加到newState
		newState.task = '';// 输入框中的值赋为空
		// console.log(newState);
		return newState;
	}else if(action.type == 'del_item'){
		// 定义新的newState
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);// 把输入框中的值添加到newState
		// console.log(newState);
		return newState;
	}

	return state;// 把数据返回给Store
}

