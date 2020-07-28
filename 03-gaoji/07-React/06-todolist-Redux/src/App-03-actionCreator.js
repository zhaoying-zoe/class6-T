import PropTypes from 'prop-types';
import {  DatePicker,Input,Button,Row,Col,List } from 'antd';
import React,{Component,Fragment} from 'react'
import './App.css';
import store from './store/index.js';// 引入Store

import { getChangeItemActioin,getAddItemActioin,getDelItemActioin } from './store/actionCreator.js';

class App extends Component{
	constructor(props){
		super(props)
		// 👇 把reducer的返回值赋给this.state 
		this.state = store.getState();// store.getState():获取reducer的返回值
		this.handleInput = this.handleInput.bind(this);
		this.handelAdd = this.handelAdd.bind(this);

		store.subscribe(()=>{
			// console.log(store.getState());
			this.setState(store.getState());// 将store上的值赋给state
		})
	}
	handleInput(ev){
		// 输入框中的值
		let val = ev.target.value;
		// 派发action
		/*
		// action must be object
		const action = {
			//Actions may not have an undefined "type" property
			type:CHANGE_ITEM,// 根据type判断 增或者删 事件
			payload:val// 接收输入框中的值
		}
		*/
		store.dispatch(getChangeItemActioin(val));
	}
	handelAdd(){
		// 派送action
		/*
		const action = {
			//Actions may not have an undefined "type" property
			type:'add_item'// 根据type判断 增或者删 事件
		}
		*/

		store.dispatch(getAddItemActioin());
	}
	handleDel(index){
		// 派送action
		/*
		const action = {
			//Actions may not have an undefined "type" property
			type:'del_item',// 根据type判断 增或者删 事件
			payload:index
		}
		*/
		store.dispatch(getDelItemActioin(index));
	}
	render(){
		return (
			<div className='App'>
			    <Row>
			      <Col span={22}>
					<Input 
						onChange={this.handleInput}
						value={this.state.task}
					/>			      
			      </Col>
			      <Col span={2}>
					<Button type="primary"
						onClick={this.handelAdd.bind(this)}
					>
						提交
					</Button>			      
			      </Col>
			    </Row>
			    <List
				    style={{ marginTop:20 }}
					bordered
					dataSource={this.state.list}
					renderItem={(item,index)=> (
			        <List.Item
				        onClick={this.handleDel.bind(this,index)}
			        >
			           {item}
			        </List.Item>
					)}
			    />
			</div>	
		)
	}
}


export default App