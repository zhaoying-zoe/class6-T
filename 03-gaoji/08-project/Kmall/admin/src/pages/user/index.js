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
		const { list } = this.props;
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
		  {
		    title: 'CreatedAt',
		    dataIndex: 'CreatedAt',
		    key: 'CreatedAt',
		  },
		];
		
		// console.log(list);
		// 把immutable对象(数据)转化成数组
		const dataSource = list.map((item) => {
			// 1.遍历immutable数据
			// 2.把遍历后 单独的immutable对象的数据的值提取出来(还是immutable数据)
			// 3.把返回的 单独的immutable数据(item) 转化成 数组
			// console.log(item);
			// console.log(item.get('username'));
			return {
			    key: '1',
			    username: item.get('username'),
			    isAdmin: item.get('isAdmin'),
			    email: item.get('email'),
			    phone: item.get('phone'),
			    CreatedAt: item.get('CreatedAt'),
			}
		}).toJS()
		// console.log(dataSource);// 数组

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
			    		dataSource={dataSource} 
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
		list:state.get('user').get('list'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(User);