import React,{Component,Fragment} from 'react';

class App extends Component{
	constructor(props){
		super(props);
		// console.log(this.state);
		this.state = {
			attr:['吃饭饭','睡觉觉','打豆豆','揍扁你'],
			list:''
		}
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
		this.setState({
			attr:list,
			list:''
		})
	}
	handleDel(index){
		// 定义空数组存放旧数据
		const attr = [...this.state.attr];
		// 把数组中的数据删除
		attr.splice(index,1);// index:从下标开始删除,删除一个
		// 把删除后剩余的数据放入原attr
		this.setState({
			attr:attr,
			list:''
		})
		// console.log(index);// 检查下标
	}
	handleChange(ev){
		// console.log(this); // this 指的是App这个构造函数
		// console.log(ev.target.value);// 输入框中输入的值
		
		// 获取输入框中的值
		let val = ev.target.value;
		// console.log(val);
		
		// 把输入框中的值存入list
		this.setState({// 异步
			list:val
		})
	}
	render(){
		// console.log(this); // this指代App
		return (
			<div className="app">
				<input value={this.state.list} className="input" 
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
										<li 
										onClick={this.handleDel.bind(this,index)}
										key={index}>
											{value}
										</li>
									)
						})
					}
				</ul>
			</div>
		)
	}
}


export default App;