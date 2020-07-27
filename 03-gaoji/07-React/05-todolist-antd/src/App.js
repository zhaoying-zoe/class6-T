import PropTypes from 'prop-types';
import {  DatePicker,Input,Button,Row,Col,List } from 'antd';
import React,{Component,Fragment} from 'react'
import './App.css'
import Item from './Item.js'


class App extends Component{
	constructor(props){
		super(props)
		//初始化state
		this.state = {
			list:['吃饭','睡觉'],
			task:''
		}

		this.handleInput = this.handleInput.bind(this)
		this.handelAdd = this.handelAdd.bind(this)
	}
	handelAdd(){
		const list = [...this.state.list,this.state.task]
		this.setState((preState)=>({
			list:list,
			task:''
		}),()=>{
			// console.log(this.ul.childNodes)
		})
	}
	handleInput(ev){
		// 输入框中的值
		let val = ev.target.value;
		this.setState((preState)=>({
			task:val
		}))
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState((preState)=>({
			list:list
		}))
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return (
				<Item 
					key={index} 
					task={item} 
					list={this.state.list} 
					index={index} 
					handleDel = {this.handleDel.bind(this,index)}
				/>
			)
		})
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
					bordered
					dataSource={this.state.list}
					renderItem={item => (
			        <List.Item
				        onClick={this.handleDel.bind(this)}
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