
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('./index.css');

var _util = require('util');
var api = require('api');
var categoriesTpl = require('./categories.tpl');

var page = {
	init:function(){
		this.getHomeCategories();
	},
	getHomeCategories:function(){
		// 发送ajax
		api.getHomeCategories({
			success:function(categories){
				console.log(categories);
				var html = _util.render(categoriesTpl,{
					categories:categories
				});
				$('.categories').html(html);
			}
		})
	}
}

$(function(){
	page.init();
})