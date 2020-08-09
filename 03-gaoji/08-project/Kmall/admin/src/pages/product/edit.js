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
		// 将商品id存到state上
		this.state = {
			productId:this.props.match.params.productId
		}
	}
	componentDidMount(){
		// 挂载结束 加载最新商品分类
		this.props.handleLevelCategories();
		// 根据state上是否有商品id,进行编辑或者新增
		if(this.state.productId){
			this.props.handleProductDetail(this.state.productId)
		}
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
		values.id = this.state.productId;
	    this.props.handleSave(err,values);
	  });
	};
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
				// 商品信息回填
				category,
				name,
				description,
				price,
				stock,
				mainImage,
				images,
				detail,
		} = this.props;
		
		// 定义一个空数组
		let mainImageLIst = [];
		// 封面图片回传
		if(mainImage){
			mainImageLIst.push({
				uid:'0',
				name:'image-png',
				status:'done',
				url:mainImage,
				response:{
					url:mainImage
				}
			})
		}
		// 商品图片回传
		let imagesLIst = [];
		if(images){
			imagesLIst = images.split(',').map((url,index)=>{
				return {
					uid:index,
					name:'image-png',
					status:'done',
					url:url,
					response:{
						url:url,
					}
				}
			})
		}
		return(
			<div className='ProductEdit'>
			  <AdminLayout>
	            <Breadcrumb style={{ margin: '16px 0' }}>
	              <Breadcrumb.Item>首页</Breadcrumb.Item>
	              <Breadcrumb.Item>商品管理</Breadcrumb.Item>
	              {
	              	this.state.productId ? <Breadcrumb.Item>编辑商品</Breadcrumb.Item> : <Breadcrumb.Item>新增商品</Breadcrumb.Item>
	              }
	            </Breadcrumb>

			    <div className="content">
			      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
			        <Form.Item label="商品分类">
			          {getFieldDecorator('category', {
			            rules: [{ required: true, message: '请选择商品分类!!' }],
			            initialValue:category,
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
			            initialValue:description,
			          })(<Input />)}
			        </Form.Item>
			        <Form.Item label="商品名称">
			          {getFieldDecorator('name', {
			            rules: [{ required: true, message: '请输入商品名称!!' }],
			            initialValue:name,
			          })(<Input />)}
			        </Form.Item>
			        <Form.Item label="商品价格">
			          {getFieldDecorator('price', {
			            rules: [{ required: true, message: '请输入商品价格!!' }],
			            initialValue:price,
			          })(<InputNumber 
				          min={0}
			          />)}
			        </Form.Item>
			        <Form.Item label="商品库存">
			          {getFieldDecorator('stock', {
			            rules: [{ required: true, message: '请输入商品库存!!' }],
			            initialValue:stock,
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
							fileList={mainImageLIst}
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
							fileList={imagesLIst}
				        />
			        </Form.Item>
					<Form.Item label="商品详情">
				        <RichEditor 
					        url={UPLOAD_DETAIL_IMAGES}
					        getValues={(values)=>{// 给子组件传一个函数
					        	handleDetail(values)
					        }}
					        values={detail}
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

		category:state.get('product').get('category'),
		name:state.get('product').get('name'),
		description:state.get('product').get('description'),
		detail:state.get('product').get('detail'),
		price:state.get('product').get('price'),
		stock:state.get('product').get('stock'),
		images:state.get('product').get('images'),
		mainImage:state.get('product').get('mainImage'),
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
		handleProductDetail:(id)=>{
			dispatch(actionCreator.getProductDetailAction(id));
		},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(WrappedProductEdit);