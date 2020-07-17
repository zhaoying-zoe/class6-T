const express = require('express')
const router = express.Router();

const UserModel = require('../models/user.js');
const hmac = require('../util/hmac.js');

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
    UserModel.find({},'-__v -password')
    .then(users=>{
        // console.log(users);
        res.render('admin/user_list',{
            userInfo:req.userInfo,
            users:users// 把查询到的users返回到前台
        })
    })
    .catch(err=>{
        console.log(err);
    })

})

module.exports = router