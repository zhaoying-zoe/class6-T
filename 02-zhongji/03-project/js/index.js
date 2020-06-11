;(function($){
/*顶部导航逻辑------开始*/
	var $dropdown = $('.top .dropdown');
	$dropdown.dropdown({
		js:true,
		mode:'slideDownUp'
	});
	//监听显示隐藏事件
	$dropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		console.log(ev.type);
		// if(ev.type == 'dropdown-show'){
		// 	var $this = $(this);
		// 	var dropdownLayer = $this.find('.dropdown-layer');
		// 	var url = $this.data('load');
		// 	$.getJSON(url,function(){
		// 		var html = '';
		// 		// for(var i = 0;i<data.length;i++){
		// 		// 	html += "<li><a href=" '+ data[i].url +' ">+'data[i].name'+</a></li>"
		// 		// }
		// 	});
		// }
	})
	// 懒加载
	/*
	// dropdown 插件测试
	$('#btn').on('click',function(ev){
		ev.stopPropagation();
		$dropdown.dropdown('show');
	})
	*/

/*顶部导航逻辑------结束*/
})(jQuery);