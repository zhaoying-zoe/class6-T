require('./index.css');

var api = require('api');
var _util = require('util');
var page = {
	init:function(){
		// 加载登录的用户名
		this.loadUsername();
		// 用户退出逻辑
		this.bindEvent();
		//加载购物车数量
		this.loadCarts()
		// console.log(this);
		// return this;
	},
	loadCarts:function(){
		var $cartNum = $('.cart-num');
		api.getCartsCount({
			success:function(count){
				$cartNum.text(count || 0)
			},
			error:function(){
				$cartNum.text(0)
			}
		})
	},
	bindEvent:function(){
		$('#logout').on('click',function(){
			// 发送ajax
			api.logout({
				success:function(result){
					window.location.reload();
				},
				error:function(msg){
					_util.showErrMsg(msg);
				}	
			})
		})
	},
	loadUsername:function(){
		// 发送ajax
		api.getUsername({
			success:function(result){
				$('.not-login').hide()
				$('.login')
				.show()
				.find('.username')
				.text(result.username)
			},
		})
		/*
		$.ajax({
			url:'/sessions/username',
			method:'get',
			datatype:'json',
			success:function(result){
				$('.not-login').hide()
				$('.login')
				.show()
				.find('.username')
				.text(result.data.username)
			},
		})
		*/
	}
}

$(function(){
	page.init();
})
module.exports = page