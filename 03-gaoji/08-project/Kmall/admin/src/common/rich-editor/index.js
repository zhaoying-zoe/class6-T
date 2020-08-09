import React,{Component} from 'react';
import Simditor from 'simditor';
import 'simditor/styles/simditor.css';
import $ from 'jquery';

class RichEditor extends Component{
	constructor(props){
		super(props)
		// 发送时携带cookie
		this.state = {
			isLoaded:false,
		}
		$.ajaxSetup({
			xhrFields:{
				withCredentials:true,
			}
		})
	}
	componentDidMount(){
		// console.log(this.textarea);// 准备dom节点
		this.editor = new Simditor({
			// 把富文本编辑器挂载到dom节点上
			textarea: this.textarea,
			// 富文本编辑器,配置工具栏按钮①
			toolbar: this.toolbar,
			upload:{
				url:this.props.url,//后台接收图片地址
				params:null,
				fileKey:'upload',//后台接收图片需要
				connectionCount:3,//允许同时上传图片数
				leaveConfirm:'正在上传图片',//如果在上传文件时离开页面，则会显示此消息；
			}
		})
		this.editor.on("valuechanged", () => {
			// editor上有getValue()的方法(获取输入框中的值)
			// 把这个值传给父组件
			this.setState({isLoaded:true},()=>{
				this.props.getValues(this.editor.getValue());
			})
		})
	}
	// 处理详情回填
	componentDidUpdate(){
		if(this.props.values && !this.state.isLoaded){
			this.editor.setValue(this.props.values);
			this.setState({
				isLoaded:true,
			})
		}
	}
	render(){
		// 富文本编辑器,配置工具栏按钮①
		this.toolbar = [
		  'title',
		  'bold',
		  'italic',
		  'underline',
		  'strikethrough',
		  'fontScale',
		  'color',
		  'ol',
		  'ul',
		  'blockquote',
		  'code',
		  'table',
		  'link',
		  'image',
		  'hr',
		  'indent',
		  'outdent',
		  'alignment',
		]
		return (
			<textarea ref={(textarea)=>{this.textarea = textarea}} id="editor"></textarea>
		)
	}
}

export default RichEditor;