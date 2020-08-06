import React,{Component} from 'react'
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// 引入路由组件
import {
  Link,
  NavLink
} from "react-router-dom";
const { Sider } = Layout;

//容器组件
class AdminSider extends Component{
	render(){
		return(
			<div className='AdminSider' style={{ minHeight: "888px" }}>
			  <Sider width={200} style={{ background: '#fff' }}>
		        <Menu
		          mode="inline"
		          defaultSelectedKeys={['1']}
		          defaultOpenKeys={['sub1']}
		          style={{ height: '100%', borderRight: 0 }}
		        >
		          <Menu.Item key="1">
					<NavLink to="/">
		              <Icon type="home" />首页
					</NavLink>
				   </Menu.Item>
		          <Menu.Item key="2">
					<NavLink to="/user">
		              <Icon type="user" />用户列表
					</NavLink>
				   </Menu.Item>
		          <Menu.Item key="3">
					<NavLink to="/category">
		              <Icon type="menu" />分类管理
					</NavLink>
				   </Menu.Item>
		           <Menu.Item key="4">
					<NavLink to="/product">
		              <Icon type="shopping" />商品管理
					</NavLink>
				   </Menu.Item>
		        </Menu>
		      </Sider>
			</div>	
		)
	}
}

export default AdminSider;