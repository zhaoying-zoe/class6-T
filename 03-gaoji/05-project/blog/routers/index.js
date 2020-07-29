// 引入 express模块
const express = require('express');
// 引入 express.Router实例化router对象
const rooter = express.Router();
const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');
const CommentModel = require('../models/comment.js');


// 获取首页数据
async function getCommonData(){
	// 获取顶部分类数据
	const getCategoriesDataPromise = CategoryModel.find({},'name').sort({_id:1});
	// 获取点击排行数据
	const getTopArticlesDataPromise = ArticleModel.find({},'click title').sort({click:-1}).limit(10);

	const categoriesData = await getCategoriesDataPromise;
	const topArticles = await getTopArticlesDataPromise;
	return {
		categoriesData,
		topArticles
	}
}

//显示首页 '/' 代表请求的是根目录
rooter.get('/', (req, res) => {
	// 获取前台cookie并验证
	// console.log(req.cookies.get('userInfo'));// 字符串
	/*
	let userInfo = {};
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'));
	}
	*/
	// console.log(userInfo);// 用户登录cookie 对象

	ArticleModel.getPaginationData(req)
	.then(data=>{
		getCommonData()
		.then(result=>{
			// 定义新对象接收参数
			const { categoriesData,topArticles } = result;
			// console.log({categoriesData});
			res.render('main/index',{
				// 把cookie信息返回到前台html页面
				userInfo:req.userInfo,
				categoriesData,
				topArticles,
				// 返回分页数据
	            articles:data.docs,
	            page:data.page,
	            list:data.list,
	            pages:data.pages
			})
		})
		.catch(err=>{
			console.log(err);
		})
	})
	.catch(err=>{
		console.log(err);
	})
})
// 处理首页分页ajax
rooter.get('/articles', (req, res) => {
	const id = req.query.id;
	let query = {};
	// 根据对应id获取相关数据
	if(id){
		query.category = id;
	}
	// 获取的数据发送到前台
	ArticleModel.getPaginationData(req,query)
	.then(data=>{
		res.json({
			code:0,
			message:'获取数据成功',
			data:data
		})
	})
	.catch(err=>{
		res.json({
			code:10,
			message:'获取数据失败'
		})
	})
})



//显示列表页 '/list' 代表请求的是列表页
rooter.get('/list/:id', (req, res) => {
	const id = req.params.id;
	let query = {};
	// 根据对应id获取相关数据
	if(id){
		query.category = id;
	}
	ArticleModel.getPaginationData(req,query)
	.then(data=>{
		getCommonData()
		.then(result=>{
			// 定义新对象接收参数
			const { categoriesData,topArticles } = result;
			// console.log({categoriesData});
			res.render('main/list',{
				// 把cookie信息返回到前台html页面
				userInfo:req.userInfo,
				categoriesData,
				topArticles,
				// 返回分页数据
	            articles:data.docs,
	            page:data.page,
	            list:data.list,
	            pages:data.pages,
	            // 回传当前分页ID
	            currentCategoryId:id
			})
		})
		.catch(err=>{
			console.log(err);
		})
	})
	.catch(err=>{
		console.log(err);
	})
})




// 获取首页数据
async function getDetailData(req){
	const id = req.params.id;
	// 获取共通数据
	const getCommonDataPromise = getCommonData();

	const getArticlesDataPromise = ArticleModel.findOneAndUpdate({_id:id},{$inc:{click:1}},{new:true})
										.populate({path:'user',select:'username'})
										.populate({path:'category',select:'name'})


	//获取评论分页数据
	const getCommentsDataPromise = CommentModel.getPaginationData(req,{article:id})

	const articleData = await getArticlesDataPromise;

	const commonData = await getCommonDataPromise;

	const commentsData = await getCommentsDataPromise;

	const { categoriesData,topArticles } = commonData;
	return {
		categoriesData,
		topArticles,
		articleData,
		commentsData
	}



}

//显示详情页 /detail 代表请求的是详情页
rooter.get('/detail/:id', (req, res) => {
	// const id = req.params.id;
	getDetailData(req)
	.then(result=>{
		// console.log(result);
		const { categoriesData,topArticles,articleData,commentsData } = result;
		res.render('main/detail',{
			// 把cookie信息返回到前台html页面
			userInfo:req.userInfo,
			categoriesData,
			topArticles,
			articleData,
			//返回分页数据
			comments:commentsData.docs,
			page:commentsData.page,
			list:commentsData.list,
			pages:commentsData.pages,
			//回传分类ID
			currentCategoryId:articleData.category._id
		})
	})
	.catch(err=>{
		console.log(err);
	})

})


// 导出模块
module.exports = rooter;