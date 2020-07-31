import React,{Component,Fragment} from 'react'
import store from '../../store/index.js';// 引入Store
import axios from 'axios';
import { connect } from 'react-redux';
import './index.css';
import {  DatePicker,Input,Button,Row,Col,List } from 'antd';


import { actionCreators } from './store/index.js';

// 容器组件
class Todelist extends Component{
	componentDidMount(){
		this.props.handleInit();
	}
	render(){
		// const { task,list,handleInput,handleAdd,handleDel } = this.props;
		return (
			<div className='Todelist'>
			    <Row>
			      <Col span={22}>
					<Input 
						onChange={this.props.handleInput}
						value={this.props.task}
					/>			      
			      </Col>
			      <Col span={2}>
					<Button type="primary"
						onClick={this.props.handleAdd}
					>
						提交
					</Button>			      
			      </Col>
			    </Row>
			    <List
				    style={{ marginTop:20 }}
					bordered
					dataSource={this.props.list}
					renderItem={(item,index)=> (
				        <List.Item onClick={()=>{this.props.handleDel(index)}}>
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
	console.log(state);
	return {
		task:state.todolist.task,
		list:state.todolist.list
	}
}
// 将属性从store映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleInput:(ev)=>{
			// 输入框中的值
			let val = ev.target.value;
			// 派发action
			dispatch(actionCreators.getChangeItemActioin(val));
		},
		handleAdd:()=>{
			// 派送action
			dispatch(actionCreators.getAddItemActioin());
		},
		handleDel:(index)=>{
			// 派送action
			dispatch(actionCreators.getDelItemActioin(index));
		}
		,handleInit:()=>{
			dispatch(actionCreators.getRequestDataActioin());

		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Todelist);