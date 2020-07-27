// 定义初始化数据
const stateDefaultData ={
	list:['吃饭','睡觉','learn English'],
	task:''
}
// state=stateDefaultData:给state赋予初始化的数据
export default (state=stateDefaultData,action)=>{
	// console.log(state);// 
	// console.log(action);
	if(action.type == 'change_item'){
		// 错误写法 👇
		state.task = action.payload;
	}
	return state;// 把数据返回给Store
}

