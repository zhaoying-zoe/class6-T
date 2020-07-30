import React,{Component,Fragment} from 'react'
import store from './store/index.js';// 引入Store
import axios from 'axios';
import { connect } from 'react-redux';


import { getChangeItemActioin,getAddItemActioin,getDelItemActioin,getAjaxDataActioin,getRequestDataActioin } from './store/actionCreator.js';

// 容器组件
class App extends Component{
	render(){
		return (
			<div className='App'>
			    <Row>
			      <Col span={22}>
					<Input 
						onChange={handleInput}
						value={this.props.task}
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
					dataSource={this.props.list}
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
	console.log(state);
	return {
		task:state.task,
		list:state.list
	}
}


export default connect(mapStateToProps,null)(App);