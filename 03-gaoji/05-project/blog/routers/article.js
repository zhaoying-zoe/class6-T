const express = require('express')
const router = express.Router();

const multer = require('multer');// 处理图片表单的中间件
// dest:将上传的图片存到指定的文件夹下
const upload = multer({dest:'public/uploads/'});// 处理图片表单的中间件

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

// 显示新增文章管理页面
router.get('/add',(req,res)=>{
    // 1.获取分类文章返回到 文章管理页面
    CategoryModel.find({})
    .then(categories=>{
        // console.log(categories);
        res.render('admin/article_add_edit',{
            userInfo:req.userInfo,
            categories
        })
    })
    .catch(err=>{
        res.render('admin/err',{
            userInfo:req.userInfo,
            message:'操作数据库失败,请稍后再试'
        })
    })

})

// 处理新增文章路由
router.post('/add',(req,res)=>{
    // 1.接收前台发送的数据 name order
    let { category,title,intro,content } = req.body;
    // console.log(category,title,intro,content);
    // 2.将文章插入到数据库中
    ArticleModel.insertMany({
        category,
        title,
        intro,
        content,
        user:req.userInfo._id
    })
    .then(data=>{
        res.render('admin/ok',{
            userInfo:req.userInfo,
            message:'新增文章成功',
            url:'/article'
        })
    })
    .catch(err=>{
        res.render('admin/err',{
            userInfo:req.userInfo,
            message:'操作数据库失败,请稍后再试'
        })
    })
})

// 处理上传图片路由
// upload.single('upload')
// upload:前台存放图片资源的字段信息
// 必须和前台传递图片资源字段保持一致
router.post('/uploadImage',upload.single('upload'),(req,res)=>{
    // console.log(req.file)
    const filePath = '/uploads/'+req.file.filename;
    res.json({
        uploaded:true,
        url:filePath
    })
})

// 显示编辑文章页面
router.get('/edit/:id',(req,res)=>{
    // 通过前台传来的id查找数据(文章id)
    const id = req.params.id;// 接收前台发送过来的id值  
    // 获取所有分类
    CategoryModel.find({})
    .then(categories=>{
        // 通过id过去对应文章
        ArticleModel.findById(id)
        .then(article=>{
            res.render('admin/article_add_edit',{
                userInfo:req.userInfo,
                categories,
                article
            })
        })
        .catch(err=>{
            console.log(err);
            res.render('admin/err',{
                userInfo:req.userInfo,
                message:'操作数据库失败,请稍后再试'
            })
        })
    })
    .catch(err=>{
        console.log(err);
        res.render('admin/err',{
            userInfo:req.userInfo,
            message:'操作数据库失败,请稍后再试'
        })
    })
})

// 处理编辑文章逻辑
router.post('/edit',(req,res)=>{
    // 1.获取前台发送的数据 name order
    let { category,title,intro,content,id } = req.body;
    // 2.更新文章
    ArticleModel.updateOne({_id:id},{category,title,intro,content})
    .then(data=>{ 
        res.render('admin/ok',{
            userInfo:req.userInfo,
            message:'更新文章成功',
            url:'/article'
        })
    })
    .catch(err=>{
        res.render('admin/err',{
            userInfo:req.userInfo,
            message:'操作数据库失败,请稍后再试'
        })
    })
})

// 处理删除文章的路由
router.get('/delete/:id',(req,res)=>{
    console.log(123)
    // 1.获取前台发送的数据 id
    const id = req.params.id;
    // 2.通过id查找数据并删除数据
    CategoryModel.deleteOne({_id:id})
    .then(data=>{
        res.render('admin/ok',{
            userInfo:req.userInfo,
            message:'删除文章成功',
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