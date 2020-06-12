;(function($){
	function Carousel($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$carousel = $elem.find('.carousel-wrap');
		this.$carouselItems = $elem.find('.carousel-item');
		this.$carouselBtns = $elem.find('.btn-item');
		this.$carouselControl = $elem.find('.control');
		

		//2.初始化
		this.init()


	}
	Carousel.prototype = {
		constructor:Carousel,
		init:function(){

		}

	}

	// 如果不传递参数则使用默认配置信息
	Carousel.DEFAULT = {

	}



	$.fn.extend({
		carousel:function(options,val){
			//1.实现隐士迭代和链式调用
			return this.each(function(){
				var $elem = $(this);
				//2. 单例模式
				var carousel = $elem.data('carousel');
				if(!carousel){
					//利用面向对象完成下拉菜单功能
					options = $.extend({},Carousel.DEFAULT,options);
					carousel = new Carousel($elem,options)
					$elem.data('carousel',carousel)
				}
				//判断当传入的参数是方法时,则调用该方法
				if(typeof carousel[options] == 'function'){
					//调用显示隐藏方法时必须传入jQuery对象
					carousel[options](val);
				}
			})
		}
	})
})(jQuery);