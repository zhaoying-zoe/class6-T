import React,{Component} from 'react';
import './index.css';

import { 
	Route,
	Switch,
 } from 'react-router-dom';

import ProductEdit from './edit.js';
import ProductList from './list.js';
import ProductDetail from './detail.js';

//容器组件
class Product extends Component{
	render(){
		const {  } = this.props;
		return(
			<div className="Product">
				<Switch>
					<Route path="/product/edit/:productId?" component={ProductEdit} />
					<Route path="/product/detail/:productId?" component={ProductDetail} />
					<Route path="/product" component={ProductList} />
				</Switch>
			</div>	
		)
	}
}

export default Product;