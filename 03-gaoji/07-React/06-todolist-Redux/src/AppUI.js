import {  DatePicker,Input,Button,Row,Col,List } from 'antd';
import React,{Component,Fragment} from 'react'
import './App.css';

// UI组件

class AppUI extends Component{
	render(){
		return (
			<div className='App'>
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


// 无状态组件
/*
const  AppUI = (props)=>{
	const { handleChange,val,handleAdd,list,handleDelete } = props;
	return( 
		<div className='App'>
			<Row>
				<Col span={12}>
				<Input 
				onChange={props.handleChange} 
				value={val} 
				/>
				</Col>
				<Col span={12}>
				<Button type="primary" onClick={props.handleAdd} >新增</Button>
				</Col>
			</Row>
			<List
			  style={{marginTop:"10px"}}
		      size="small"
		      bordered
		      dataSource={list}
		      renderItem={(item,index) => <List.Item onClick={()=>{props.handleDelete(index)}}>{item}</List.Item>}
		    />
		</div>
	)
}
*/

export default AppUI