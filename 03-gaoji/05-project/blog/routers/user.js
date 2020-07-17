const express = require('express')
const router = express.Router();

const UserModel = require('../models/user.js');
const hmac = require('../util/hmac.js');

//处理用户注册逻辑
router.post('/register',(req,res)=>{
	//1.获取参数信息
	const { username,password } = req.body;
	//2.数据同名验证
	UserModel.findOne({username:username})
	.then(user=>{// user是指数据库中返回的数据
		if(user){//数据库有该用户不能注册同名用户
			res.json({
				code:10,
				message:'该用户已经被注册,请重新注册'
			})
		}else{//数据库没有同名记录可以注册
			//3.验证通过插入数据
			UserModel.insertMany({
				username:username,
				password:hmac(password)
				// isAdmin:true // 注册管理员用
			})
			.then(result=>{
				res.json({
					code:0,
					message:'注册成功',
					user:result
				})
			})
			.catch(err=>{
				console.log(err)
				res.json({
					code:10,
					message:'数据库操作失败,请稍后再试'
				})
			})
		}
	})
	.catch(err=>{
		console.log(err);
		res.json({
			code:0,
			message:'数据库操作失败,请稍后再试'
		})
	})
})

//处理用户登录逻辑
router.post('/login',(req,res)=>{
	//1.获取参数信息
	const { username,password } = req.body;
	//2.查询数据库内是否有相关用户名和密码信息
	UserModel.findOne({username:username,password:hmac(password)},'-password')
	.then((user)=>{// user是指数据库中返回的数据
		if(user){// 登录成功(数据库中有相关数据)
			// 登录成功后把用户信息通过cookie发送到客户端
			// cookies.set( name, [ value ], [ options ] )
			// 过期时间是24h
			// req.cookies.set('userInfo',JSON.stringify(user),{maxAge:1000*60*60*24});

			// 在session上添加cookie信息
			req.session.userInfo = user;

			res.json({
				code:0,
				message:'登陆成功!',
				user:user
			})
		}else{// 登录失败(数据库中无相关数据)
			console.log(err)
			res.json({
				code:10,
				message:'登陆失败!'
			})
		}
	})
	.catch(err=>{
		res.json({
			code:10,
			message:'登陆失败!'
		})
	})
})

//处理用户退出逻辑
router.get('/logout',(req,res)=>{
	// 清除cookie
	// req.cookies.set('userInfo',null);
	// 销毁session
	req.session.destroy()
	res.json({
		code:0,
		message:'您的退出成功了!'
	})
})

module.exports = router