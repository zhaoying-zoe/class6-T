require('pages/common/footer')
var _side = require('pages/common/side');
require('pages/common/nav')
require('pages/common/search')
require('./index.css');

var _util = require('util');
var api = require('api');
var tpl = require('./index.tpl');

var page = {
	init:function(){
		// 侧边栏选中状态
		this.renderSide();
		// 获取登录状态信息
		this.getUserInfo();
	},
	renderSide:function(){
		_side.render('user-center');
	},
	getUserInfo:function(){
		// 发送ajax
		api.getUserInfo({
			success:function(data){
				// console.log(data);
				var html = _util.render(tpl,data);
				$('.side-content').html(html);			
			}
		})
	},
}


// $(function() {}) 是$(document).ready(function()的简写
$(function(){
	page.init();
})