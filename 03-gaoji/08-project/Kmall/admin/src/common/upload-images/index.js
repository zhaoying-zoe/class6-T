import React,{Component} from 'react';
import { Upload, Icon, Modal } from 'antd';

class UploadImages extends Component{
	constructor(props){
		super(props);
		this.state = {
		    previewVisible: false,
		    previewImage: '',
		    fileList: [],
		}
		this.handleCancel = this.handleCancel.bind(this);
		this.handlePreview = this.handlePreview.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	static getDerivedStateFromProps(props, state){
		// 判断:只在编辑商品时执行👇代码
		if(props.fileList.length > 0 && state.fileList.length == 0){
			return {
				fileList:props.fileList
			}
		}
		return null;
	}
	handleCancel(){
	  	this.setState({ previewVisible: false })
	};
	handlePreview(file){
	    this.setState({
	    	previewImage: file.url || file.preview,
	    	previewVisible: true,
	    });
	};
	handleChange({ fileList }){
		this.setState({ fileList },()=>{
			// 调用父组件的函数,把图片地址传给父组件
			this.props.getFileList(fileList.map(file=>{
				// 获取图片的url,传给父组件
				if(file.response){
					// console.log(file.response.url);
					return file.response.url
				}
			}).join(','))
		})
	}
	render(){
		const { action,max,getFileList } = this.props;// 从父组件传入
		const { previewVisible, previewImage, fileList } = this.state;
		const uploadButton = (
	    <div>
	        <Icon type="plus" />
	        <div className="ant-upload-text">Upload</div>
	    </div>
	    );
	    return (
	      <div className="clearfix">
	        <Upload
	          action={action}
	          listType="picture-card"
	          fileList={fileList}
	          withCredentials={true}
	          onPreview={this.handlePreview}
	          onChange={this.handleChange}
	        >
	          {fileList.length >= max ? null : uploadButton}
	        </Upload>
	        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
	          <img alt="example" style={{ width: '100%' }} src={previewImage} />
	        </Modal>
	      </div>
	    )
	}
}

export default UploadImages;