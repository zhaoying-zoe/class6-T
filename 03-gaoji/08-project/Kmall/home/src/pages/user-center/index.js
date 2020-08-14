require('pages/common/footer')
var _side = require('pages/common/side');
require('pages/common/nav')
require('pages/common/search')
require('./index.css');

var _util = require('util');
var api = require('api');

var page = {
	init:function(){
		// 侧边栏选中状态
		this.renderSide();
	},
	renderSide:function(){
		_side.render('user-center');
	}
}


// $(function() {}) 是$(document).ready(function()的简写
$(function(){
	page.init();
})