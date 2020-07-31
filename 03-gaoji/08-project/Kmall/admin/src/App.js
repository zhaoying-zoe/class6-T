// 项目总组件
import React,{Component,Fragment} from 'react';
import './App.css';
import Todelist from './pages/todolist/index.js';
import Home from './pages/home/index.js';
import { connect } from 'react-redux';


// 容器总组件
class App extends Component{
	render(){
		return (
			<div>
				<Todelist />
				<Home />
			</div>
		)
	}
}
// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default connect(null,null)(App);