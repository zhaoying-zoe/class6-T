import axios from 'axios';
import * as types from './actionTypes.js';
import apiObj from 'api/index.js';
import { message } from 'antd';// 引入全局提示,直接用

// 处理新增商品
export const getMainImageAction = (mainImage) =>({
	type:types.SET_MAIN_IMAGE,
	payload:mainImage
})
export const getImagesAction = (Images) =>({
	type:types.SET_IMAGES,
	payload:Images
})
export const getDetailAction = (Detail) =>({
	type:types.SET_DETAIL,
	payload:Detail
})
export const setMainImageErrAction = () =>({
	type:types.SET_MAIN_IMAGE_ERR,
})
export const setImagesErrAction = () =>({
	type:types.SET_IMAGES_ERR,
})

export const getSaveProductsAction = (err,values)=>{
	return (dispatch,getState)=>{
		// 先发送ajax再派送action
		// console.log(values);
		const state = getState().get('product');
		const mainImage = state.get("mainImage");
		const images = state.get("Images");
		const detail = state.get("Detail");

		// 自定义组件验证
		let hasErr = false;
		if(err){
			hasErr = true;
		}
		// 如果封面图片和商品图片无值,则派发 Erraction
		if(!mainImage){
			hasErr = true;
			dispatch(setMainImageErrAction())
		}
		if(!images){
			hasErr = true;
			dispatch(setImagesErrAction())
		}
		if(hasErr){
			return
		};
		// 验证通过,发送请求
		apiObj.addProducts({
			...values,
			mainImage,
			images,
			detail,
		})
		.then(result=>{
			const data = result.data;
			// console.log(data);
			if(data.code == 0){// 添加成功
				message.success(data.message,()=>{
					// 添加成功后,进入商品管理页面
					window.location.href='/product';
				});
			}else{// 添加失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
	}
}

// 获取商品分类
const setLevelCategories = (data) =>({
	type:types.SET_LEVEL_CATEGORIES,
	payload:data
})

export const getLevelCategoriesAction = ()=>{
	return (dispatch,getState)=>{
		// 先发送ajax再派送action
		apiObj.getLevelCategories({
			// 限制显示分类等级
			level:3
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 添加成功
				// 1.派发action,将数据存到store
				// console.log(data);
				dispatch(setLevelCategories(data.data));
			}else{// 添加失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
	}
}

//处理分类列表分页数据
// 获取数据
const setPageAction = (data) =>({
	type:types.GET_PAGE,
	payload:data
})
// 分页器开始加载图标
const getCategoriesStartAction = () =>({
	type:types.REQUEST_START_ACTION,
})
// 分页器结束加载图标
const getCategoriesDoneAction  = () =>({
	type:types.REQUEST_DONE_ACTION,
})

export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		// 发送ajax前先派送加载图标的action
		dispatch(getCategoriesStartAction());
		// 先发送ajax再派送action
		apiObj.getProductsList({
			page:page
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 1.派发action,将数据存到store
				// 获取数据
				dispatch(setPageAction(data.data));
			}else{// 验证失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
		.finally(()=>{
			// 取消加载图标的action
			dispatch(getCategoriesDoneAction());
		})
	}
}

// 处理更新分类数据
export const updateNameAction = (id,newName)=>{
	return (dispatch,getState)=>{
		// 获取当前页
		const page = getState().get('category').get('current');
		// 发送ajax前先派送加载图标的action
		dispatch(getCategoriesStartAction());
		// 先发送ajax再派送action
		apiObj.getUpdataName({
			id:id,
			name:newName,
			page:page,
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 更新成功的提示信息
				message.success('更新分类成功');
				// 1.派发action,将数据存到store
				// 获取数据
				dispatch(setPageAction(data.data));
			}else{// 验证失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
		.finally(()=>{
			// 取消加载图标的action
			dispatch(getCategoriesDoneAction());
		})
	}
}

// 处理更新排序
export const updatePageAction = (id,order)=>{
	return (dispatch,getState)=>{
		// 获取当前页
		const page = getState().get('product').get('current');
		// 发送ajax前先派送加载图标的action
		dispatch(getCategoriesStartAction());
		// 先发送ajax再派送action
		apiObj.updateProductsOrder({
			id:id,
			order:order,
			page:page,
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 更新成功的提示信息
				message.success('更新排序成功');
				// 1.派发action,将数据存到store
				// 获取数据
				dispatch(setPageAction(data.data));
			}else{// 验证失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
		.finally(()=>{
			// 取消加载图标的action
			dispatch(getCategoriesDoneAction());
		})
	}
}

// 处理首页显示
export const updateIsShowAction = (id,isShow)=>{
	return (dispatch,getState)=>{
		// 获取当前页
		const page = getState().get('category').get('current');
		// 发送ajax前先派送加载图标的action
		dispatch(getCategoriesStartAction());
		// 先发送ajax再派送action
		apiObj.updateProductsIsShow({
			id:id,
			isShow:isShow,
			page:page,
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 更新成功的提示信息
				message.success('操作成功');
				// 1.派发action,将数据存到store
				// 获取数据
				dispatch(setPageAction(data.data));
			}else{// 验证失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
		.finally(()=>{
			// 取消加载图标的action
			dispatch(getCategoriesDoneAction());
		})
	}
}

// 处理下架/上架
export const updateStatusAction = (id,Status)=>{
	return (dispatch,getState)=>{
		// 获取当前页
		const page = getState().get('category').get('current');
		// 发送ajax前先派送加载图标的action
		dispatch(getCategoriesStartAction());
		// 先发送ajax再派送action
		apiObj.updateProductsStatus({
			id:id,
			status:Status,
			page:page,
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 更新成功的提示信息
				message.success('操作成功');
				// 1.派发action,将数据存到store
				// 获取数据
				dispatch(setPageAction(data.data));
			}else{// 验证失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
		.finally(()=>{
			// 取消加载图标的action
			dispatch(getCategoriesDoneAction());
		})
	}
}
// 处理热卖
export const updateisHotAction = (id,isHot)=>{
	return (dispatch,getState)=>{
		// 获取当前页
		const page = getState().get('category').get('current');
		// 发送ajax前先派送加载图标的action
		dispatch(getCategoriesStartAction());
		// 先发送ajax再派送action
		apiObj.updateProductsIsHot({
			id:id,
			isHot:isHot,
			page:page,
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 更新成功的提示信息
				message.success('操作成功');
				// 1.派发action,将数据存到store
				// 获取数据
				dispatch(setPageAction(data.data));
			}else{// 验证失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
		.finally(()=>{
			// 取消加载图标的action
			dispatch(getCategoriesDoneAction());
		})
	}
}