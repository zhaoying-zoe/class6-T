import React,{Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import { Breadcrumb,Table, Button , Divider, Tag } from 'antd';
import moment from 'moment';// 修改时间组件
import { 
	Link ,
} from "react-router-dom"
import {actionCreator} from './store/index.js';
import AdminLayout from 'common/layout';// 公共模板

//容器组件
class CategoryList extends Component{
	componentDidMount(){
		this.props.handlePage(1)
	}
	render(){
		const { list,total,pageSize,current,handlePage,isFetching } = this.props;
		const columns = [
		  {
		    title: 'name',
		    dataIndex: 'name',
		    key: 'name',
		    render: text => <a>{text}</a>,
		  },
		  {
		    title: 'mobileName',
		    dataIndex: 'mobileName',
		    key: 'mobileName',
		  },
		  {
		    title: 'isShow',
		    dataIndex: 'isShow',
		    key: 'isShow',
		  },
		  {
		    title: 'order',
		    dataIndex: 'order',
		    key: 'order',
		  },
		];
		
		// console.log(list);
		// 把immutable对象(数据)转化成数组
		const dataSource = list.toJS()
		// console.log(dataSource);// 数组

		return(
			<div className='CategoryList'>
			  <AdminLayout>
	            <Breadcrumb style={{ margin: '16px 0' }}>
	              <Breadcrumb.Item>首页</Breadcrumb.Item>
	              <Breadcrumb.Item>分类管理</Breadcrumb.Item>
	              <Breadcrumb.Item>分类列表</Breadcrumb.Item>
	            </Breadcrumb>
				<div className="btn">
					<Link to="/category/add"><Button type="primary btn-add">新增分类</Button></Link>
				</div>
			    <div className="content">
			    	<Table 
			    		columns={columns} 
			    		dataSource={dataSource} 
			    		pagination={{
			    			total:total,
			    			pageSize:pageSize,
			    			current:current
			    		}}
				    	loading={ isFetching /*分页器加载*/ }
			    		onChange={ (pages)=>{// 点击分页器按钮时触发
			    			// 传入pages对象中的current(当前页)
			    			handlePage(pages.current);
			    		} }
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
		list:state.get('category').get('list'),
		total:state.get('category').get('total'),
		pageSize:state.get('category').get('pageSize'),
		current:state.get('category').get('current'),
		isFetching:state.get('category').get('isFetching'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page)=>{
			// 调用派发action的函数(分页)
			dispatch(actionCreator.getPageAction(page));
		},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);