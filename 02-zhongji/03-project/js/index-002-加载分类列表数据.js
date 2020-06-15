;(function($){

	// 样式共同
	// 只加载一次html结构	
	function loadHtmlOnce($elem,callback){
		var url = $elem.data('load');
		// 如果没有数据地址则不加载请求
		if(!url) return;

		// 获取数据
		if(!$elem.data('isLoaded')){
			$.getJSON(url,function(data){
				typeof callback == 'function' && callback($elem,data);

			});
		}
	} 
	

/*顶部导航逻辑------开始*/
	var $dropdown = $('.top .dropdown');
	$dropdown.dropdown({
		js:true,
		mode:'slideDownUp'
	});
	//监听显示隐藏事件
	$dropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		// console.log(ev.type);
		/*
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
		*/
		loadHtmlOnce($(this),buildTopLayer)
	})
		
	// 生成顶部下拉html函数
	function buildTopLayer($elem,data){
		var html = '';
		// 动态加载数据
		for(var i = 0;i<data.length;i++){
			html += '<li><a href="'+ data[i].url +'">'+data[i].name+'</a></li>'
		}
		// 模拟网络延迟加载功能
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			// 数据已经加载完成
			$elem.data('isLoaded',true)
		},300)
	}
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
	// 自定义显示下拉层事件
	$search.on('getSearchData',function(ev,data){
		var $elem = $(this);
		// console.log(ev)
		// console.log('data'); // 测试函数是否被调用
		// 1.生成html结构
		/*
		var html = '';
		for(var i = 0;i<data.result.length;i++){
			html += '<li>' + data.result[i][0] + '</li>';
		}
		*/
		// console.log(html);
		
		var html = getSearchData(data,5);
		// 2.把html结构添加到下拉层
		$elem.search('appendHtml',html);
		// 3.显示下拉层
		if($elem.isLoadedHTML == ''){
			$elem.search('hideLayer');
		}else{
			$elem.search('showLayer');
		}
	})
	$search.on('getNoSearchData',function(){
		$elem.search('appendHtml','');
		$elem.search('hideLayer');
	})

	// 生成下拉层结构数据函数并且可以控制长度
	function getSearchData(data,max){
		var html = '';
		for(var i = 0;i<data.result.length;i++){
			if (i >= max) break;
			html += '<li class="search-item">' + data.result[i][0] + '</li>';
		}

		return html;
	}
/*搜索区域逻辑------结束*/

/*焦点区域分类列表逻辑------开始*/
	var $categoryDropdown = $('.nav-focus .dropdown');
	$categoryDropdown.dropdown({
		js:true,
		mode:'slideLeftRight',
		eventName:''
	})

	$categoryDropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		// console.log(ev.type);
		if(ev.type == 'dropdown-show'){
		/*
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
						html += '<dl class="category-details">'
						html +=	'		<dt class="category-details-title fl">'
						html +=	'			<a href="#" class="category-details-title-link">'+ data[i].title +'</a>'
						html +=	'		</dt>'
						html +=	'		<dd class="category-details-item fl">'
						for(var j = 0;j<data[i].items.length;j++){
							html +=	'			<a href="#" class="link">'+ data[i].items[j] +'</a>'	
						}
						html +=	'		</dd>'
						html +=	'	</dl>'
					}
					// 模拟网络延迟加载功能
					setTimeout(function(){
						dropdownLayer.html(html);
						// 数据已经加载完成
						$this.data('isLoaded',true)
					},300)
				});
			}
		*/
			loadHtmlOnce($(this),buildCategoryLayer)
		}
	})
	// 生成分类列表下拉html函数
	function buildCategoryLayer($elem,data){
		var html = '';
		// 动态加载数据
		for(var i = 0;i<data.length;i++){
			html += '<dl class="category-details">'
			html +=	'		<dt class="category-details-title fl">'
			html +=	'			<a href="#" class="category-details-title-link">'+ data[i].title +'</a>'
			html +=	'		</dt>'
			html +=	'		<dd class="category-details-item fl">'
			for(var j = 0;j<data[i].items.length;j++){
				html +=	'			<a href="#" class="link">'+ data[i].items[j] +'</a>'	
			}
			html +=	'		</dd>'
			html +=	'	</dl>'
		}
		// 模拟网络延迟加载功能
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			// 数据已经加载完成
			$elem.data('isLoaded',true)
		},300)
	}
/*焦点区域分类列表逻辑------结束*/

})(jQuery);