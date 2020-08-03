import React,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './index.css';
import { Breadcrumb,Table, Divider, Tag } from 'antd';

import {actionCreator} from './store/index.js';
import AdminLayout from '../../common/layout';

//容器组件
class User extends Component{
	render(){
		const columns = [
		  {
		    title: 'UserName',
		    dataIndex: 'username',
		    key: 'username',
		    render: text => <a>{text}</a>,
		  },
		  {
		    title: 'IsAdmin',
		    dataIndex: 'isAdmin',
		    key: 'isAdmin',
		    render: isAdmin => (isAdmin ? '是' : '否'),
		  },
		  {
		    title: 'Email',
		    dataIndex: 'email',
		    key: 'email',
		  },
		  {
		    title: 'Phone',
		    dataIndex: 'phone',
		    key: 'phone',
		  },
		];

		const { dataSource } = this.props;
		console.log(dataSource)
		dataSource.map(Item){
			console.log(Item)
		}
		return(
			<div className='User'>
			  <AdminLayout>
	            <Breadcrumb style={{ margin: '16px 0' }}>
	              <Breadcrumb.Item>首页</Breadcrumb.Item>
	              <Breadcrumb.Item>用户列表</Breadcrumb.Item>
	            </Breadcrumb>
			    <div className="content">
			    	<Table 
			    		columns={columns} 
			    		dataSource={[]} 
			    	/>
			    </div>
			  </AdminLayout>
			</div>	
		)
	}
}

//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		dataSource:state.get('user').get('list'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(User);