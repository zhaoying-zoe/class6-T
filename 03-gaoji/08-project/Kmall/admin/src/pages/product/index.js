import React,{Component} from 'react';
import './index.css';

import { 
	Route,
	Switch,
 } from 'react-router-dom';

import ProductEdit from './edit.js';
import ProductList from './list.js';

//容器组件
class Product extends Component{
	render(){
		const {  } = this.props;
		return(
			<div className="Product">
				<Switch>
					<Route path="/product/edit" component={ProductEdit} />
					<Route path="/product" component={ProductList} />
				</Switch>
			</div>	
		)
	}
}

export default Product;