import React,{Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import { Breadcrumb,Form, Select, Input, Button,InputNumber   } from 'antd';

import {actionCreator} from './store/index.js';
import AdminLayout from 'common/layout';// 公共模板

import UploadImages from 'common/upload-images';// 上传文件组件
import RichEditor from 'common/rich-editor';// 富文本编辑器组件

import {UPLOAD_IMAGES,UPLOAD_DETAIL_IMAGES} from 'api/config.js';// 引入上传图片api
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
	  	/*
	    if (!err) {
	      // console.log('Received values of form: ', values);
	      this.props.handleSave(err,values);
	    }
	    */
	    this.props.handleSave(err,values);
	  });
	};
	componentDidMount(){
		// 挂载结束 加载最新商品分类
		this.props.handleLevelCategories();
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		const { categories,
				handleMainImage,
				handleImages,
				handleDetail,

				MainImageValidateStatus,
				MainImageHelp,
				ImagesValidateStatus,
				ImagesHelp,
		} = this.props;
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
			          })(<InputNumber 
				          min={0}
			          />)}
			        </Form.Item>
			        <Form.Item label="商品库存">
			          {getFieldDecorator('stock', {
			            rules: [{ required: true, message: '请输入商品库存!!' }],
			          })(<InputNumber 
				          min={0}
			          />)}
			        </Form.Item>
			        <Form.Item 
			        	label="封面图片"
			        	validateStatus={MainImageValidateStatus}
			        	help={MainImageHelp}
			        >
				        <UploadImages 
					        action={ UPLOAD_IMAGES }
					        max={1}
					        getFileList = {(fileList)=>{
					        	handleMainImage(fileList)
					        }}
				        />
			        </Form.Item>
					<Form.Item 
						label="商品图片"
			        	validateStatus={ImagesValidateStatus}
			        	help={ImagesHelp}
					>
				        <UploadImages 
					        action={ UPLOAD_IMAGES }
					        max={5}
					        getFileList = {(fileList)=>{
					        	handleImages(fileList)
					        	// 获取图片地址,并把图片显示到页面
					        }}
				        />
			        </Form.Item>
					<Form.Item label="商品详情">
				        <RichEditor 
					        url={UPLOAD_DETAIL_IMAGES}
					        getValues={(fileList)=>{// 给子组件传一个函数
					        	handleDetail(fileList)
					        }}
				        />
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
		)	}
}
const WrappedProductEdit = Form.create({ name: 'coordinated' })(ProductEdit);

//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		categories:state.get('product').get('categories'),
		MainImageValidateStatus:state.get('product').get('MainImageValidateStatus'),
		MainImageHelp:state.get('product').get('MainImageHelp'),
		ImagesValidateStatus:state.get('product').get('ImagesValidateStatus'),
		ImagesHelp:state.get('product').get('ImagesHelp'),

	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleLevelCategories:()=>{
			dispatch(actionCreator.getLevelCategoriesAction());
		},
		handleSave:(err,values)=>{
			dispatch(actionCreator.getSaveProductsAction(err,values));
		},
		handleMainImage:(mainImage)=>{
			dispatch(actionCreator.getMainImageAction(mainImage));
		},
		handleImages:(Images)=>{
			dispatch(actionCreator.getImagesAction(Images));
		},
		handleDetail:(Detail)=>{
			dispatch(actionCreator.getDetailAction(Detail));
		},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(WrappedProductEdit);