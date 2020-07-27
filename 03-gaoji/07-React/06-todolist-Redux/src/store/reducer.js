const stateData ={
	list:['吃饭','睡觉'],
	task:''
}

export default (state=stateData,action)=>{
	console.log(state);
	console.log(action);

	return state;
}

