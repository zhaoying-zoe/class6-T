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
			handleUpdataName ,
			handleUpdataMobileName ,
			handleUpdataOrder,
			handleChangeisShow,
		} = this.props;

		const columns = [
		  {
		    title: 'name',
		    dataIndex: 'name',
		    width:'40%',
		    key: 'name',
		    render: (name,record) => {
		    	return <Input 
			    	defaultValue={name} 
			    	style={{ width:'50%' }} 
			    	onBlur={
			    		(ev)=>{
			    			// 失去焦点时派发action
			    			// 如果值未更改,则进行判断
			    			if(ev.target.value!=name){
			    				handleUpdataName(record._id,ev.target.value)
			    			}
			    		}
			    	}
		    	/>
		    },
		  },
		  {
		    title: 'mobileName',
		    dataIndex: 'mobileName',
		    key: 'mobileName',
		    render: (mobileName,record) => {
		    	return <Input 
			    	defaultValue={mobileName} 
			    	style={{ width:'50%' }} 
			    	onBlur={
			    		(ev)=>{
			    			// 失去焦点时派发action
			    			// 如果值未更改,则进行判断
			    			if(ev.target.value!=mobileName){
			    				handleUpdataMobileName(record._id,ev.target.value)
			    			}
			    		}
			    	}
		    	/>
		    },
		  },
		  {
		    title: 'isShow',
		    dataIndex: 'isShow',
		    key: 'isShow',
		    render: (isShow,record) => {
		    	return (    
				    <Switch
				      checkedChildren='显示'
				      unCheckedChildren='隐藏'
				      defaultChecked={isShow=='0'?false:true}
				      onChange={ (checked)=>{
				      	const isShow = checked ? '1' : '0'
				      	handleChangeisShow(record._id,isShow) }
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
		handleUpdataName:(id,newName)=>{
			// 调用派发action的函数(更新分类)
			// console.log(id,newName);
			dispatch(actionCreator.updateNameAction(id,newName));
		},
		handleUpdataMobileName:(id,mobileName)=>{
			// 调用派发action的函数(更新分类)
			// console.log(id,mobileName);
			dispatch(actionCreator.updateMobileNameAction(id,mobileName));
		},
		handleUpdataOrder:(id,order)=>{
			// 调用派发action的函数(更新分类)
			// console.log(id,order);
			dispatch(actionCreator.updatePageAction(id,order));
		},
		handleChangeisShow:(id,isShow)=>{
			// 调用派发action的函数(更新分类)
			// console.log(id,isShow)
			dispatch(actionCreator.updateIsShowAction(id,isShow));
		},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList);