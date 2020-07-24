import React,{Component,Fragment} from 'react';

class App extends Component{
	handleClick(){
		// react在调用函数时this会变为undefined,所以需要把this bind一下 
		// 事件函数中通常需要用当前的组件对象,所以需要在绑定事件时bind(this)
		console.log(this); // this 指的是App这个构造函数
		console.log('你就是个猪!');
	}
	handleChange(ev){
		console.log(this); // this 指的是App这个构造函数
		console.log(ev.target.value);
	}
	render(){
		// console.log(this); // this指代App
		return (
			<div className="app">
				<input className="input" 
					onChange={this.handleChange.bind(this)}
				/>
				<button className="btn"
				onClick={this.handleClick.bind(this)}
				>
					提交吧,小老弟@!
				</button>
				<ul className="list">
					<li className="item">吃饭饭</li>
					<li className="item">睡觉觉</li>
					<li className="item">打豆豆</li>
					<li className="item">揍扁你</li>
				</ul>
			</div>
		)
	}
}


export default App;