import React,{Component} from 'react';
import './index.css';

import { 
	Route,
	Switch,
 } from 'react-router-dom';

import CategoryList from './list.js';
import CategoryAdd from './add.js';

//容器组件
class Category extends Component{
	render(){
		const {  } = this.props;
		return(
			<div className="Category">
				<Switch>
					<Route path="/category/add" component={CategoryAdd} />
					<Route path="/category" component={CategoryList} />
				</Switch>
			</div>	
		)
	}
}

export default Category;