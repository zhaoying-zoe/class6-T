import React,{Component,Fragment} from 'react';
import Item from './item.js';
import PropTypes from 'prop-types';

class App extends Component{
	// 生命周期函数1:在某个时刻组件会自动执行的函数
	constructor(props){
		// console.log('props app');
		super(props);// 继承属性并改变this指向
		//this.props = props
		console.log(props);
		
		this.state = {
			attr:['吃饭饭','睡觉觉','打豆豆','揍扁你'],
			list:''
		}
	}

	// 生命周期函数1:在某个时刻组件会自动执行的函数
	static getDerivedStateFromProps(props, state){
		console.log('getDerivedStateFromProps');
		console.log('getDerivedStateFromProps.props',props);// 其他组件的数据
		console.log('getDerivedStateFromProps,state',state);// 组件自身的数据
		/*
		return {
			attr:['吃饭饭','睡觉觉','打豆豆','揍扁你'],
			list:''
		}
		return {
			attr:['吃饭饭','睡觉觉','打豆豆','揍扁你'],
			list:''
		}
		*/
		return null;// 调用该函数 必须要有返回值
	}
	componentDidMount(){
		// 组件挂载完毕执行,多用于发送ajax获取数据
		console.log('componentDidMount');
	}


	handleAdd(){
		// react在调用函数时this会变为undefined,所以需要把this bind一下 
		// 事件函数中通常需要用当前的组件对象,所以需要在绑定事件时bind(this)
		// console.log(this); // this 指的是App这个构造函数
		
		// 定义空数组用来存attr的数据(扩展后的)
		let list = [...this.state.attr];
		// 把存好的输入框中的数据 放到list数组中中
		list.push(this.state.list);
		// 给原state重新赋值
		this.setState((preState)=>({
			attr:list,
			list:''
		}))
	}
	handleDel(index){
		// 定义空数组存放旧数据
		const attr = [...this.state.attr];
		// 把数组中的数据删除
		attr.splice(index,1);// index:从下标开始删除,删除一个
		// 把删除后剩余的数据放入原attr
		this.setState((preState)=>({
			attr:attr,
			list:''
		}))
	}
	handleChange(ev){
		// console.log(this); // this 指的是App这个构造函数
		// console.log(ev.target.value);// 输入框中输入的值
		
		// 获取输入框中的值
		let val = ev.target.value;
		// console.log(val);
		
		// 把输入框中的值存入list
		this.setState((preState)=>({// 异步
			list:val
		}))
	}
	render(){
		// console.log(this); // this指代App
		return (
			<div className="app">
				<input ref = {(input)=>{this.input = input}}
					value={this.state.list} className="input" 
					onChange={this.handleChange.bind(this)}
				/>
				<button className="btn"
				onClick={this.handleAdd.bind(this)}
				>
					提交吧,小老弟@!
				</button>
				<ul className="list">
					{
						this.state.attr.map((value,index)=>{
							return (
								<Item key={ index }
									 list={value} 
									 attr={this.state.attr} 
									 index={index} 
									 handleDel={this.handleDel.bind(this,index)}
								 />
							)
						})
					}
				</ul>
			</div>
		)
	}
}


export default App;