const express = require('express')
const router = express.Router();

const UserModel = require('../models/user.js');
const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');
const hmac = require('../util/hmac.js');
const pagination = require('../util/pagination.js');

// 利用中间件验证管理员身份
router.use('/',(req,res,next)=>{
    if(req.userInfo.isAdmin){
        next();
    }else{
        res.send('<h1>你个菜比！请使用管理员账号登录！</h1>')
    }
})

// 显示文章管理页
router.get('/',(req,res)=>{
    const options = {
        page:req.query.page * 1,
        model:ArticleModel,
        query:{},
        projection:'-__v',
        sort:{_id:1}
    }
    pagination(options)
    .then(result=>{
        res.render('admin/article_list',{// 把查询到的数据返回到前台
            userInfo:req.userInfo,
            articles:result.docs,
            page:result.page,
            list:result.list,
            pages:result.pages,
            url:'/article'
        })
    })
    .catch(err=>{
        console.log(err);
    })
})

// 显示新增分类管理页面
router.get('/add',(req,res)=>{
    res.render('admin/category_add_edit',{
        userInfo:req.userInfo
    })
})

// 处理前台提交的数据
router.post('/add',(req,res)=>{
    // 1.获取前台发送的数据 name order
    let { name,order } = req.body;
    if(!order){
        order = 0;
    }
    // 2.查询集合进行验证
    CategoryModel.findOne({name:name})
    .then(category=>{
        if(category){// 数据库有该分类名称不能插入
            res.render('admin/err',{
                userInfo:req.userInfo,
                message:'已有该分类,请更换名称',
                url:'/category'
            })
        }else{// 可以插入该名称的分类
            CategoryModel.insertMany({
                name,
                order
            })
            // 插入成功会有promise实例,可以继续调用实例上的方法
            .then(data=>{ 
                res.render('admin/ok',{
                    userInfo:req.userInfo,
                    message:'添加分类成功',
                    url:'/category'
                })
            })
            .catch(err=>{
                res.render('admin/err',{
                    userInfo:req.userInfo,
                    message:'操作数据库失败,请稍后再试'
                })
            })
        }
    })
    .catch(err=>{
        res.render('admin/err',{
            userInfo:req.userInfo,
            message:'操作数据库失败,请稍后再试'
        })
    })
})

// 显示编辑分类管理页面
router.get('/edit/:id',(req,res)=>{
    const id = req.params.id;// 接收前台发送过来的id值  
    // 通过前台传来的id查找数据
    CategoryModel.findById(id)
    .then(category=>{
        res.render('admin/category_add_edit',{
            userInfo:req.userInfo,
            category
        })
    })
    .catch(err=>{
        // console.log(err);
        res.render('admin/err',{
            userInfo:req.userInfo,
            message:'操作数据库失败,请稍后再试'
        })
    })
})

// 处理前台编辑的数据
router.post('/edit',(req,res)=>{
    // 1.获取前台发送的数据 name order
    let { name,order,id } = req.body;
    if(!order){
        order = 0;
    }
    // 2.查询集合获取相应数据
    CategoryModel.findOne({_id:id})
    .then(category=>{
        if(category.name == name && category.order == order){// 数据未更改
            res.render('admin/err',{
                userInfo:req.userInfo,
                message:'数据未改动,请更改后再试'
            })
        }else{
            CategoryModel.findOne({name:name,_id:{$ne:id}})
            .then(result=>{
                if(result){// 数据库有同名分类,不能更新数据
                    res.render('admin/err',{
                        userInfo:req.userInfo,
                        message:'数据库有该分类,请更换名称'
                    })
                }else{// 可以更新数据
                    CategoryModel.updateOne({_id:id},{name,order})
                    .then(data=>{ 
                        res.render('admin/ok',{
                            userInfo:req.userInfo,
                            message:'更新分类成功',
                            url:'/category'
                        })
                    })
                    .catch(err=>{
                        res.render('admin/err',{
                            userInfo:req.userInfo,
                            message:'操作数据库失败,请稍后再试'
                        })
                    })
                }
            })
            .catch(err=>{
                res.render('admin/err',{
                    userInfo:req.userInfo,
                    message:'操作数据库失败,请稍后再试'
                })
            })
        }

    })
    .catch(err=>{
        res.render('admin/err',{
            userInfo:req.userInfo,
            message:'操作数据库失败,请稍后再试'
        })
    })
})

// 处理前台删除的数据
router.get('/delete/:id',(req,res)=>{
    console.log(123)
    // 1.获取前台发送的数据 id
    const id = req.params.id;
    // 2.通过id查找数据兵删除数据
    CategoryModel.deleteOne({_id:id})
    .then(data=>{
        res.render('admin/ok',{
            userInfo:req.userInfo,
            message:'删除分类成功',
            url:'/category'
        })
    })
    .catch(err=>{
        console.log(err);
        res.render('admin/err',{
            userInfo:req.userInfo,
            message:'操作数据库失败,请稍后再试',
            url:'/category'
        })
    })
})
module.exports = router;