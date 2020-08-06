import React,{Component} from 'react';
import Simditor from 'simditor';
import 'simditor/styles/simditor.css';
import $ from 'jquery';

class RichEditor extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		// console.log(this.textarea);// 准备dom节点
		this.editor = new Simditor({
			// 把富文本编辑器挂载到dom节点上
			textarea: this.textarea,
			// 富文本编辑器,配置工具栏按钮①
			toolbar: this.toolbar
		})
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