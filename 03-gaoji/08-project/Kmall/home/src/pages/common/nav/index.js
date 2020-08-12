require('./index.css');
// var api = require('api')
// var _util = require('util')

// var page = {
// 	init:function(){
// 		//加载登录的用户名
// 		this.loadUsername()
// 		//绑定事件
// 		this.bindEvent()
// 	},
// 	bindEvent:function(){
// 		$('#logout').on('click',function(){
// 			api.logout({
// 				success:function(result){
// 					// console.log(result)
// 					window.location.reload()
// 				},
// 				error:function(msg){
// 					_util.showErrMsg(msg)
// 				}
// 			})
// 		})
// 	},
// 	loadUsername:function(){
// 		api.getUsername({
// 			success:function(result){
// 				$('.not-login').hide()
// 				$('.login')
// 				.show()
// 				.find('.username')
// 				.text(result.username)
// 			}
// 		})
// 		/*
// 		$.ajax({
// 			url:'/sessions/username',
// 			method:'get',
// 			dataType:'json',
// 			success:function(result){
// 				$('.not-login').hide()
// 				$('.login')
// 				.show()
// 				.find('.username')
// 				.text(result.data.username)
// 			}
// 		})
// 		*/
// 	}
// }

// $(function(){
// 	page.init()
// })