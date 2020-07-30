import React,{Component,Fragment} from 'react'
import store from './store/index.js';// 引入Store
import AppUI from './AppUI.js';// 引入AppUI
import axios from 'axios';

import { getChangeItemActioin,getAddItemActioin,getDelItemActioin,getAjaxDataActioin,getRequestDataActioin } from './store/actionCreator.js';

// 容器组件
class App extends Component{
	constructor(props){
		super(props)
		// 👇 把reducer的返回值赋给this.state 
		this.state = store.getState();// store.getState():获取reducer的返回值
		this.handleInput = this.handleInput.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDel = this.handleDel.bind(this);
		// 将store上的值赋给state
		store.subscribe(()=>{
			this.setState(store.getState());
		})
	}
	// 发送ajax
	componentDidMount(){
		/*
		axios.get('http://127.0.0.1:3000')
		.then(result=>{
			// 派发action
			store.dispatch(getAjaxDataActioin(result.data));
		})
		.catch(err=>{
			console.log(err);
		})
		*/
		// 有异步处理,需借助中间件来派发action
		// 引入的中间件(actionCreator里引入),专门用来处理异步程序
		store.dispatch(getRequestDataActioin());
	}
	handleInput(ev){
		// 输入框中的值
		let val = ev.target.value;
		// 派发action
		store.dispatch(getChangeItemActioin(val));
	}
	handleAdd(){
		// 派送action
		store.dispatch(getAddItemActioin());
	}
	handleDel(index){
		// 派送action
		store.dispatch(getDelItemActioin(index));
	}
	render(){
		const { task,list } = this.state;
		return (
			<AppUI 
				task = { task }
				list = { list }
				handleInput = { this.handleInput }
				handleAdd = { this.handleAdd }
				handleDel = { this.handleDel }
			/>	
		)
	}
}


export default App