const express = require('express')
const router = express.Router();

const UserModel = require('../models/user.js');
const hmac = require('../util/hmac.js');
const pagination = require('../util/pagination.js');

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

module.exports = router