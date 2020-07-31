import React,{Component} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TodoList from './pages/todolist/index.js'
import Login from './pages/login/index.js'

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			isAdmin:true
		}
	}
	render(){
		const ProtectRoute = ({component:Component,...rest})=>{
			// console.log(rest)
			return <Route 
				{...rest}
				render={(props)=>{
					return this.state.isAdmin ? <Component {...props} /> : <h2>this is login page</h2>
				}}
			/>
		}
		return(
			<Router>
				<div className='App'>
					<Route exact path='/' component={TodoList} />
					<Route path='/login' component={Login} />
				</div>
			</Router>
		)
	}
}



export default App