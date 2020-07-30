// 接收state,返回newState

// 定义初始化数据
const stateDefaultData = {
	list:['吃饭','睡觉','learn English'],
	task:''
}

import {
	CHANGE_ITEM,
	ADD_ITEM,
	DEL_ITEM,
	AJAX_DATA
} from './reducerType.js';

// state=stateDefaultData:给state赋予初始化的数据
export default (state=stateDefaultData,action,)=>{
	if(action.type == CHANGE_ITEM){
		// 定义新的newState
		const newState = JSON.parse(JSON.stringify(state));
		newState.task = action.payload;
		
		return newState;
	}else if(action.type == 'add_item'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.task);// 把输入框中的值添加到newState
		newState.task = '';// 输入框中的值赋为空
		
		return newState;
	}else if(action.type == 'del_item'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);// 把输入框中的值添加到newState
		
		return newState;
	}else if(action.type == 'ajax_data'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.payload;// 把输入框中的值添加到newState
		
		return newState;
	}

	return state;// 把数据返回给Store
}

