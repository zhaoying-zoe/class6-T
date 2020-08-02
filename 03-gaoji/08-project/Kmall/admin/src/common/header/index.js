import React,{Component} from 'react'
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//容器组件
class AdminHeader extends Component{
	render(){
		return(
			<div className='AdminHeader'>			   
				<Header className="header">
			      <div className="logo" />
			      <Menu
			        theme="dark"
			        mode="horizontal"
			        defaultSelectedKeys={['2']}
			        style={{ lineHeight: '64px' }}
			      >
			        <Menu.Item key="1">nav 1</Menu.Item>
			        <Menu.Item key="2">nav 2</Menu.Item>
			        <Menu.Item key="3">nav 3</Menu.Item>
			      </Menu>
			    </Header>
			</div>	
		)
	}
}

export default AdminHeader;