import React,{Component,Fragment} from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import {  DatePicker,Input,Button,Row,Col,List } from 'antd';


import { getChangeItemActioin,getAddItemActioin,getDelItemActioin,getAjaxDataActioin,getRequestDataActioin } from './store/actionCreator.js';

// 容器组件
class App extends Component{
	componentDidMount(){
		this.props.handleInit();
	}
	render(){
		const { task,list,handleInput,handleAdd,handleDel } = this.props;
		return (
			<div className='App'>
			    <Row>
			      <Col span={22}>
					<Input 
						onChange={handleInput}
						value={task}
					/>			      
			      </Col>
			      <Col span={2}>
					<Button type="primary"
						onClick={handleAdd}
					>
						提交
					</Button>			      
			      </Col>
			    </Row>
			    <List
				    style={{ marginTop:20 }}
					bordered
					dataSource={list}
					renderItem={(item,index)=> (
				        <List.Item onClick={()=>{handleDel(index)}}>
				           {item}
				        </List.Item>
					)}
			    />
			</div>	
		)
	}
}
// 将属性从store映射到组件
const mapStateToProps = (state)=>{
	// console.log(state);
	return {
		task:state.task,
		list:state.list
	}
}
// 将属性从store映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleInput:(ev)=>{
			// 输入框中的值
			let val = ev.target.value;
			// 派发action
			dispatch(getChangeItemActioin(val));
		},
		handleAdd:()=>{
			// 派送action
			dispatch(getAddItemActioin());
		},
		handleDel:(index)=>{
			// 派送action
			dispatch(getDelItemActioin(index));
		}
		,handleInit:()=>{
			dispatch(getRequestDataActioin());

		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(App);