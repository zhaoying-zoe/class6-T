import React,{Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import { Breadcrumb,Table, Button ,Input,InputNumber,Switch, Icon  } from 'antd';
import moment from 'moment';// 修改时间组件
import { 
	Link ,
} from "react-router-dom"
import {actionCreator} from './store/index.js';
import AdminLayout from 'common/layout';// 公共模板

//容器组件
class ProductList extends Component{
	componentDidMount(){
		this.props.handlePage(1)
	}
	render(){
		const { list,
			total,
			pageSize,
			current,
			handlePage,
			isFetching,
			handleUpdataisShow,
			handleUpdataOrder,
			handleUpdataisHot,
			handleUpdataStatus,
		} = this.props;

		const columns = [
		  {
		    title: 'name',
		    dataIndex: 'name',
		    key: 'name',
		  },
		  {
		    title: 'isShow',
		    dataIndex: 'isShow',
		    key: 'isShow',
		    render: (isShow,record) => {
		    	return (    
				    <Switch
				      checkedChildren='是'
				      unCheckedChildren='否'
				      defaultChecked={isShow=='0'?false:true}
				      onChange={ (checked)=>{
				      	const isShow = checked ? '1' : '0'
				      	handleUpdataisShow(record._id,isShow) }
				      }
				    />)
		   		},
		  },
		  {
		    title: 'isHot',
		    dataIndex: 'isHot',
		    key: 'isHot',
		    render: (isHot,record) => {
		    	return (    
				    <Switch
				      checkedChildren='是'
				      unCheckedChildren='否'
				      defaultChecked={isHot=='0'?false:true}
				      onChange={ (checked)=>{
				      	const isHot = checked ? '1' : '0'
				      	handleUpdataisHot(record._id,isHot) }
				      }
				    />)
		   		},
		  },
		  {
		    title: 'status',
		    dataIndex: 'status',
		    key: 'status',
		    render: (status,record) => {
		    	return (    
				    <Switch
				      checkedChildren='上架'
				      unCheckedChildren='下架'
				      defaultChecked={status=='0'?false:true}
				      onChange={ (checked)=>{
				      	const status = checked ? '1' : '0'
				      	handleUpdataStatus(record._id,status) }
				      }
				    />)
		   		},
		  },
		  {
		    title: 'order',
		    dataIndex: 'order',
		    key: 'order',
		    render: (order,record) => {
		    	return <InputNumber 
			    	defaultValue={order} 
			    	onBlur={
			    		(ev)=>{
			    			// 失去焦点时派发action
			    			// 如果值未更改,则进行判断
			    			if(ev.target.value!=order){
			    				handleUpdataOrder(record._id,ev.target.value)
			    			}
			    		}
			    	}
		    	/>
		    },
		  },
		];
		
		// console.log(list);
		// 把immutable对象(数据)转化成数组
		const dataSource = list.toJS()
		// console.log(dataSource);// 数组

		return(
			<div className='ProductList'>
			  <AdminLayout>
	            <Breadcrumb style={{ margin: '16px 0' }}>
	              <Breadcrumb.Item>首页</Breadcrumb.Item>
	              <Breadcrumb.Item>商品管理</Breadcrumb.Item>
	              <Breadcrumb.Item>商品列表</Breadcrumb.Item>
	            </Breadcrumb>
				<div className="btn">
					<Link to="/product/edit"><Button type="primary btn-add">新增商品</Button></Link>
				</div>
			    <div className="content">
			    	<Table 
			    		columns={columns} 
			    		dataSource={dataSource} 
			    		rowKey='_id'
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
		list:state.get('product').get('list'),
		total:state.get('product').get('total'),
		pageSize:state.get('product').get('pageSize'),
		current:state.get('product').get('current'),
		isFetching:state.get('product').get('isFetching'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page)=>{
			// 调用派发action的函数(分页)
			dispatch(actionCreator.getPageAction(page));
		},
		handleUpdataisShow:(id,isShow)=>{
			// 调用派发action的函数(是否热卖)
			dispatch(actionCreator.updateIsShowAction(id,isShow));
		},
		handleUpdataOrder:(id,order)=>{
			// 调用派发action的函数(排序)
			dispatch(actionCreator.updatePageAction(id,order));
		},
		handleUpdataisHot:(id,isHot)=>{
			// 调用派发action的函数(是否热卖)
			dispatch(actionCreator.updateisHotAction(id,isHot));
		},
		handleUpdataStatus:(id,Status)=>{
			// 调用派发action的函数(上架下架)
			dispatch(actionCreator.updateStatusAction(id,Status));
		},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList);