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
	// 加载图片
	function loadImg(imgUrl,success,error){
		var img = new Image();
		img.onload = function(){
			typeof success == 'function' && success(imgUrl)
		}
		img.onerror = function(){
			typeof error == 'function' && error();
		}
		//模拟网络延迟
		setTimeout(function(){
			img.src = imgUrl;
		},500)
	}
	

/*顶部导航逻辑------开始*/
	var $dropdown = $('.top .dropdown');
	$dropdown.dropdown({
		js:true,
		mode:'slideDownUp'
	});
	//监听显示隐藏事件
	$dropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
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

/*焦点区域轮播图逻辑------开始*/
	function carouselLazyLoad($elem){
		$elem.item = [];
		$elem.totalLoadedNum = 0;
		$elem.totalNum = $elem.find('.carousel-img').length;
		$elem.fnLoad = null;
		// 1.开始加载
		$elem.on('courselShow',$elem.fnLoad = function(ev,index,elem){
			if(!$elem.item[index]){
				$elem.trigger('coursel-load',[index,elem]);
			}
		});
		// 2.执行加载
		$elem.on('coursel-load',function(ev,index,elem){
			var $this = $(elem);
			var $images = $this.find('.carousel-img');
			$images.each(function(){
				var $image = $(this);
				var imageUrl = $image.data('src');
				loadImg(imageUrl,function(imageUrl){
					$image.attr('src',imageUrl);
				},function(){
					$image.attr('src','image/focus-carousel/placeholder.png');
				})

				// 图片加载完毕
				$elem.item[index] = 'loaded';
				$elem.totalLoadedNum++;
				// 判断是否所有图片加载完毕,如果加载完毕,移除监听事件
				if($elem.totalLoadedNum == $elem.totalNum){
					$elem.trigger('coursel-loaded');
				}
			})
			
		})
		// 3.加载完毕
		$elem.on('coursel-loaded',function(){
			$elem.off('courselShow',$elem.fnLoad);
		});
	}
	var $coursel = $('.nav-focus .carousel-wrap');
	carouselLazyLoad($coursel);
	$coursel.coursel({});
/*焦点区域轮播图逻辑------结束*/

/*今日热销逻辑------开始*/
	var $todaysCoursel = $('.todays .carousel-wrap');
	carouselLazyLoad($todaysCoursel);
	$todaysCoursel.coursel({});
/*今日热销逻辑------结束*/

/*楼层区域逻辑------开始*/
	// 楼层图片懒加载
	function floorImageLazyLoad($elem){
		$elem.item = [];
		$elem.totalLoadedNum = 0;
		$elem.totalNum = $elem.find('.floor-img').length;
		$elem.fnLoad = null;
		// 1.开始加载
		$elem.on('tab-show',$elem.fnLoad = function(ev,index,elem){
			if(!$elem.item[index]){
				$elem.trigger('tab-load',[index,elem]);
			}
		});
		// 2.执行加载
		$elem.on('tab-load',function(ev,index,elem){
			var $this = $(elem);
			var $images = $this.find('.floor-img');
			$images.each(function(){
				var $image = $(this);
				var imageUrl = $image.data('src');
				loadImg(imageUrl,function(imageUrl){
					$image.attr('src',imageUrl);
				},function(){
					$image.attr('src','image/focus-carousel/placeholder.png');
				})

				// 图片加载完毕
				$elem.item[index] = 'loaded';
				$elem.totalLoadedNum++;
				// 判断是否所有图片加载完毕,如果加载完毕,移除监听事件
				if($elem.totalLoadedNum == $elem.totalNum){
					$elem.trigger('tab-loaded');
				}
			})
			
		})
		// 3.加载完毕
		$elem.on('tab-loaded',function(){
			$elem.off('tab-show',$elem.fnLoad);
		});
	}
	// 判断楼层是否进入到可视区
	function isVisible($elem){
		return ($win.height()+$win.scrollTop()>$elem.offset().top) && ($elem.height()+$elem.offset().top > $win.scrollTop());
	}

	var $floor = $('.floor');
	var $win = $(window);
	var $doc = $(document);
	// 遍历每一个楼层实现懒加载
	/*
	$floor.each(function(){
		floorImageLazyLoad($(this));
	})
	*/
	$doc.on('floor-show',function(ev,index,elem){
		console.log(index,elem)
	})
	// 遍历每一个楼层判断是否在可视区
	function timeShow(){
		$floor.each(function(index,elem){
			if(isVisible($(elem))){
				$doc.trigger('floor-show',[index,elem])
			}
		})
	}
	

	// 监听面板显示事件
	$floor.on('tab-show',function(ev,index,elem){
		// console.log(index,elem)
	})
	$win.on('load resize scroll',function(){
		clearTimeout($doc.floorTimer);
		$doc.floorTimer = setTimeout(timeShow,300)
		
	})
	$floor.tab({});
/*楼层区域逻辑------结束*/
})(jQuery);