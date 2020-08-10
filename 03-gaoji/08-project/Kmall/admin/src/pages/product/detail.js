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
class ProductDetail extends Component{
	constructor(props){
		super(props);
		// 将商品id存到state上
		this.state = {
			productId:this.props.match.params.productId
		}
	}
	componentDidMount(){
		// 获取商品详情
		if(this.state.productId){
			this.props.handleProductDetail(this.state.productId)
		}
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		const { 
			// 商品信息回填
			categoryName,
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
		let imagesList = [];
		if(images){
			// console.log(images);
			imagesList = images.split(',').map((url,index)=>{
				return <li key={index}><img src={url} /></li>
			})
		}
		return(
			<div className='ProductDetail'>
			  <AdminLayout>
	            <Breadcrumb style={{ margin: '16px 0' }}>
	              <Breadcrumb.Item>首页</Breadcrumb.Item>
	              <Breadcrumb.Item>商品管理</Breadcrumb.Item>
	              <Breadcrumb.Item>商品详情</Breadcrumb.Item>
	            </Breadcrumb>

			    <div className="content">
			      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
			        <Form.Item label="商品分类">
			          <Input value={categoryName} disabled={true} />
			        </Form.Item>
			        <Form.Item label="商品名称">
			          <Input value={name} disabled={true} />
			        </Form.Item>
			        <Form.Item label="商品描述">
			          <Input value={description} disabled={true} />
			        </Form.Item>
			        <Form.Item label="商品价格">
			          <InputNumber value={price} disabled={true} min={0}/>
			        </Form.Item>
			        <Form.Item label="商品库存">
			          <InputNumber value={stock} disabled={true} min={0}/>
			        </Form.Item>
			        <Form.Item label="封面图片">
				        {
				        	mainImage ? <ul className="imageBox"><li><img src={mainImage} /></li></ul> : null
				        }
			        </Form.Item>
					<Form.Item label="商品图片">
						<ul className="imageBox">
				        	{mainImage ? imagesList : null}
				        </ul>
			        </Form.Item>
					<Form.Item label="商品详情">
						<div dangerouslySetInnerHTML={{__html:detail}}></div>
			        </Form.Item>
			      </Form>
			    </div>
			  </AdminLayout>
			</div>	
		)	}
}
const WrappedProductDetail = Form.create({ name: 'coordinated' })(ProductDetail);

//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		categoryName:state.get('product').get('categoryName'),
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
		handleProductDetail:(id)=>{
			dispatch(actionCreator.getProductDetailAction(id));
		},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(WrappedProductDetail);