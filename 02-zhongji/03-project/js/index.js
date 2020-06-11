;(function($){
/*顶部导航逻辑------开始*/
	var $dropdown = $('.top .dropdown');
	$dropdown.dropdown({
		js:true,
		mode:'slideDownUp'
	});
	//监听显示隐藏事件
	$dropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		// console.log(ev.type);
		if(ev.type == 'dropdown-show'){
			var $this = $(this);
			var dropdownLayer = $this.find('.dropdown-layer');
			var url = $this.data('load');

			// 如果没有数据地址则不加载请求
			if(!url) return;
			if(!$this.data('isLoaded')){
				$.getJSON(url,function(data){
					// console.log(2333);// 判断数据是否重复加载
					var html = '';
					// 动态加载数据
					for(var i = 0;i<data.length;i++){
						html += '<li><a href="'+ data[i].url +'">'+data[i].name+'</a></li>'
					}
					// 模拟网络延迟加载功能
					setTimeout(function(){
						dropdownLayer.html(html);
						// 数据已经加载完成
						$this.data('isLoaded',true)
					},300)
				});
			}

		}
	})

	/*
	// dropdown 暴露事件插件测试
	$('#btn').on('click',function(ev){
		ev.stopPropagation();
		$dropdown.dropdown('show');
	})
	*/
/*顶部导航逻辑------结束*/

/*搜索区域逻辑------开始*/
	var $search = $('.header .search');
	$search.search({
		js:true,
		mode:'slideDownUp'
	});
/*搜索区域逻辑------结束*/
})(jQuery);