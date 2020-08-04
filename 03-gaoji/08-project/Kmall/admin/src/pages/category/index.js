import React,{Component} from 'react';
import './index.css';
import { Breadcrumb } from 'antd';

//容器组件
class Category extends Component{
	render(){
		const {  } = this.props;
		
		return(
			<div className='Category'>
	            <Breadcrumb style={{ margin: '16px 0' }}>
	              <Breadcrumb.Item>首页</Breadcrumb.Item>
	              <Breadcrumb.Item>分类管理</Breadcrumb.Item>
	            </Breadcrumb>
			</div>	
		)
	}
}

export default Category;