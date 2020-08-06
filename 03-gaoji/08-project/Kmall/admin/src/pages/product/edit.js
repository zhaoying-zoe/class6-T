import React,{Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import { Breadcrumb,Form, Select, Input, Button,InputNumber   } from 'antd';

import {actionCreator} from './store/index.js';
import AdminLayout from 'common/layout';// 公共模板

import UploadImages from 'common/upload-images';// 上传文件组件
import RichEditor from 'common/rich-editor';// 富文本编辑器组件

const { Option } = Select;

//容器组件
class ProductEdit extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
	  e.preventDefault();
	  this.props.form.validateFields((err, values) => {
	    if (!err) {
	      // console.log('Received values of form: ', values);
	      this.props.handleAddCategories(values);
	    }
	  });
	};
	componentDidMount(){
		// 挂载结束 加载最新商品分类
		this.props.handleLevelCategories();
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		const { categories } = this.props;
		return(
			<div className='ProductEdit'>
			  <AdminLayout>
	            <Breadcrumb style={{ margin: '16px 0' }}>
	              <Breadcrumb.Item>首页</Breadcrumb.Item>
	              <Breadcrumb.Item>商品管理</Breadcrumb.Item>
	              <Breadcrumb.Item>新增商品</Breadcrumb.Item>
	            </Breadcrumb>

			    <div className="content">
			      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
			        <Form.Item label="商品分类">
			          {getFieldDecorator('category', {
			            rules: [{ required: true, message: '请选择商品分类!!' }],
			          })(
			            <Select
			              placeholder="商品分类"
			            >
			              {
							// console.log(categories)
							categories.map((category)=>{
								return <Option key={category.get('_id')} value={category.get('_id')}>{category.get('name')}</Option>
							})
			              }
			            </Select>,
			          )}
			        </Form.Item>
			        <Form.Item label="商品描述">
			          {getFieldDecorator('description', {
			            rules: [{ required: true, message: '请输入商品描述!!' }],
			          })(<Input />)}
			        </Form.Item>
			        <Form.Item label="商品名称">
			          {getFieldDecorator('name', {
			            rules: [{ required: true, message: '请输入商品名称!!' }],
			          })(<Input />)}
			        </Form.Item>
			        <Form.Item label="商品价格">
			          {getFieldDecorator('price', {
			            rules: [{ required: true, message: '请输入商品价格!!' }],
			          })(<InputNumber />)}
			        </Form.Item>
			        <Form.Item label="商品库存">
			          {getFieldDecorator('stock', {
			            rules: [{ required: true, message: '请输入商品库存!!' }],
			          })(<InputNumber />)}
			        </Form.Item>
			        <Form.Item label="封面图片">
				        <UploadImages />
			        </Form.Item>
					<Form.Item label="商品图片">
				        商品图片
			        </Form.Item>
					<Form.Item label="商品详情">
				        <RichEditor />
			        </Form.Item>
			        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
			          <Button 
			          	type="primary"
			          	onClick={this.handleSubmit}
			          >
			            提交
			          </Button>
			        </Form.Item>
			      </Form>
			    </div>
			  </AdminLayout>
			</div>	
		)
	}
}
const WrappedProductEdit = Form.create({ name: 'coordinated' })(ProductEdit);

//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		categories:state.get('product').get('categories'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleAddCategories:(values)=>{
			dispatch(actionCreator.getAddCategoriesAction(values));
		},
		handleLevelCategories:()=>{
			dispatch(actionCreator.getLevelCategoriesAction());
		},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(WrappedProductEdit);