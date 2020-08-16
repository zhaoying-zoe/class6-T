import React,{Component} from 'react';
import './App.css';
// 引入路由组件
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { getLocalStorage } from 'util';// 获取查看cookie
// 引入后台管理页面路由
import AdminHome from 'pages/home/index.js';
// 引入登录页面路由
import Login from 'pages/login/index.js';
// 引入 用户列表 路由的UI组件
import User from 'pages/user/index.js';
// 引入 错误路由 页面的UI组件
import Err from 'common/err';
// 引入 商品分类 路由的UI组件
import Category from 'pages/category/index.js';
// 引入 商品管理 路由的UI组件
import Product from 'pages/product/index.js';
// 引入 广告管理 路由的UI组件
import Ad from 'pages/ad';

class App extends Component{
	render(){
		const HomeRoute = ({ component:Component, ...rest }) => {
			return <Route
				{...rest}
				render={(props) => {
					return getLocalStorage() ? <Component /> : <Redirect to="/login" />
				}}
			/>
		}
		const LoginRoute = ({ component:Component, ...rest }) => (
			<Route 
				{...rest} 
				render={(props) => {
					return getLocalStorage() ? <Redirect to="/" /> : <Component />
				}}
			/>
		)
		return(
			<Router forceRefresh={true}>
				<div className='App'>
					<Switch>
						<HomeRoute exact path='/' component={AdminHome} />
						<HomeRoute path='/user' component={User} />
						<HomeRoute path='/category' component={Category} />
						<HomeRoute path='/ad' component={Ad} />
						<HomeRoute path='/product' component={Product} />
						<LoginRoute path='/login' component={Login} />
						<Route component={Err} />
						<Route path="/logout" component={Login} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App