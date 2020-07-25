import React,{Component,Fragment} from 'React';

class Item extends Component{
	constructor(props){
		super(props);
	}
	handleDelete(index){
		// 子组件不能修改父组件中的数据
		/*
		console.log(this.props.index);
		this.props.attr.splice(index,1)
		cosole.log(this.props.attr);
		*/
	
	}
	render(){
		// return <li onClick={this.handleDelete.bind(this)} >{this.props.list}</li>
		return <li onClick={this.props.handleDel} >{this.props.list}</li>
	}
}


export default Item;