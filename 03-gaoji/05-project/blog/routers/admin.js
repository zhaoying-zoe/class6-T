const express = require('express')
const router = express.Router();

const UserModel = require('../models/user.js');
const hmac = require('../util/hmac.js');
const pagination = require('../util/pagination.js');
const CommentModel = require('../models/comment.js');


// 利用中间件处理管理员身份
router.use('/',(req,res,next)=>{
    if(req.userInfo.isAdmin){
        next();
    }else{
        res.send('<h1>你个菜比！请使用管理员账号登录！</h1>')
    }
})

// 显示管理员页面
router.get('/',(req,res)=>{
    res.render('admin/index',{
        userInfo:req.userInfo
    })
})
// 显示用户列表
router.get('/user_list',(req,res)=>{
    // 获取后台数据库的数据
    /* 
        分页:由前台发送的page来决定
        limit:2
        约定:skip (page - 1)*limit
    */
   /*
    let page = req.query.page * 1;
    const limit = 2;
    // console.log(page);
    if(isNaN(page)){
        page = 1;
    }
    // 设置上一页边界控制
    if(page == 0){
        page = 1;
    }
    // 获取数据库中数据的总条数
    UserModel.countDocuments((err,counts)=>{
        // console.log(counts);// 11 个数据
        // 定义页码总数
        let pages = Math.ceil(counts/limit);
        // console.log(pages);/ 6页
        // 定一下一页边界控制
        if(page >= pages){
            page = pages
        }
        let list = [];// 定义数组用来存页码总数
        for(let i = 1;i<=pages;i++){
            list.push(i)
        }

        // 跳过数据的条数
        let skip = (page - 1)*limit;
        UserModel.find({},'-__v -password')
        .skip(skip).limit(limit).sort({_id:1})
        .then(users=>{
            // console.log(users);
            res.render('admin/user_list',{
                userInfo:req.userInfo,
                users:users,// 把查询到的users返回到前台
                page:page,
                list:list,
                pages
            })
        })
        .catch(err=>{
            console.log(err);
        })
    })
    */
   const options = {
        page:req.query.page * 1,
        model:UserModel,
        query:{},
        projection:'-__v -password',
        sort:{_id:1}
    }
    pagination(options)
    .then(result=>{
        res.render('admin/user_list',{
            userInfo:req.userInfo,
            users:result.docs,// 把查询到的users返回到前台
            page:result.page,
            list:result.list,
            pages:result.pages,
            url:'/admin/user_list'
        })
    })
    .catch(err=>{
        console.log(err);
    })
})

//显示评论列表页面
router.get('/comment',(req,res)=>{
    //获取所有评论分页信息
    CommentModel.getPaginationData(req)
    .then(result=>{
        res.render('admin/comment_list',{
            userInfo:req.userInfo,
            comments:result.docs,
            page:result.page,
            list:result.list,
            pages:result.pages
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

//处理删除评论逻辑
router.get('/comment/delete/:id',(req,res)=>{
    //获取参数
    const id = req.params.id;
    //通过ID查找数据库并删除该条记录
    CommentModel.deleteOne({_id:id})
    .then(data=>{
        res.render('admin/ok',{
            userInfo:req.userInfo,
            message:'删除评论成功',
            url:'/admin/comment'
        })
    })
    .catch(err=>{
        console.log(err);
        res.render('admin/err',{
            userInfo:req.userInfo,
            message:'操作数据库失败,请稍后再试!',
            url:'/admin/comment'
        })
    })
})

//显示修改密码页面
router.get('/password',(req,res)=>{
    res.render('admin/password',{
        userInfo:req.userInfo,
    })
})
//处理更新密码路由
router.post('/password',(req,res)=>{
    const { password } = req.body;
    //查询数据库更新密码
    UserModel.updateOne({_id:req.userInfo._id},{password:hmac(password)})
    .then(data=>{
        //清除用户状态信息
        req.session.destroy()
        res.render('admin/ok',{
            userInfo:req.userInfo,
            message:'更新密码成功',
            url:'/'
        })
    })
    .catch(err=>{
        console.log(err);
        res.render('admin/err',{
            userInfo:req.userInfo,
            message:'操作数据库失败,请稍后再试!',
            url:'/admin'
        })
    })
})

module.exports = router