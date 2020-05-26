;(function($){
	/*顶部导航逻辑------开始*/
		$('.top .dropdown').hover(function(){
			// console.log(this);// this指.dropdown
			$(this).addClass('menu-active');// 添加类名 menu-active
		},function(){
			$(this).removeClass('menu-active');// 移除类名 menu-active
		})
	/*顶部导航逻辑------结束*/
})(jQuery);