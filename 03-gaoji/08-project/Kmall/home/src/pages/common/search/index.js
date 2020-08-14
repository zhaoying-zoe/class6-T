require('./index.css');

var api = require('api');
var _util = require('util');
var page = {
	init:function(){
		// 绑定事件
		this.bindEvent();
	},
	bindEvent:function(){
		$('#btn-search').on('click',function(){
			var val = $.trim($('#search-input').val());
			window.location.href = '/list.html?keyword='+val;
		})
		// 监听键盘事件
		$('#search-input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				$('#btn-search').trigger('click')
			}
		})
	},
}

$(function(){
	page.init();
})

