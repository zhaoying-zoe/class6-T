import React,{Component} from 'react'
import './App.css'
// 引入路由组件
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import TodoList from './pages/todolist/index.js'
import Login from './pages/login/index.js'
// 引入错误路由页面的组件
import Err from '../src/common/err'

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			isAdmin:true
		}
	}
	render(){
	    const HomeRoute = ({ component: Component, ...rest }) => (
	      <Route {...rest} render={props => (
	        window.localStorage.getItem('userInfo') ? (
	          <Component {...props}/>
	        ) : (
	          <Redirect to={{
	            pathname: '/login'
	          }}/>
	        )
	      )}
	      />
	    )
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
					<Switch>
						<Route exact path='/' component={TodoList} />
						<Route path='/login' component={Login} />
						<Route component={Err} />
					</Switch>
				</div>
			</Router>
		)
	}
}



export default App