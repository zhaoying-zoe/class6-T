;(function($){
	function Coursel($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$courselItems = this.$elem.find('.carousel-item');
		this.$courselBtns = this.$elem.find('.btn-item');
		this.$courselControls = this.$elem.find('.control');

		this.now = this.options.activeIndex;
		//2.初始化
		this.init();
	}

	Coursel.prototype = {
		constructor:Coursel,
		init:function(){
			var _this = $(this);
			if(this.options.slide){// 动画切换进行划入划出

			}else{// 动画切换进行淡入淡出
				//1.隐藏所有图片显示当前图片
				this.$elem.addClass('fade');
				this.$courselItems.eq(this.now).show();
				//2.底部按钮显示状态
				this.$courselBtns.eq(this.now).addClass('active');
				//3.监听事件显示左右点击按钮
				this.$elem.hover(function(){
					this.$courselControls.show();
				}.bind(this),function(){
					this.$courselControls.hide();
				}.bind(this))
				//5.初始化显示隐藏插件
				this.$courselItems.showHide(this.options);
				//4.(事件代理)监听点击左右按钮实现动画切换
				this.$elem.on('click','.control',function(){
					var $this = $(this);
					console.log($this);
					if($this.hasClass('control-left')){
						console.log($this);
					}else if($this.hasClass('control-right')){
						_this._fade(_this.now+1);
					}
				})
			}
		},
		_fade:function(index){
			// 1.隐藏当前图片
			this.$courselItems.eq(this.now).showHide('hide');
			// 2.显示下一张图片
			this.$courselItems.eq(index).showHide('show');
			// 3.更新底部按钮状态
			this.$courselBtns.eq(this.now).reClass('active');
			this.$courselBtns.eq(index).addClass('active');
			// 4.更新索引
			this.now = index;
		}
	}

	// 如果不传递参数则使用默认配置信息
	Coursel.DEFAULT = {
		slide:false,
		activeIndex:0,
		js:true,
		mode:'fade'
	}



	$.fn.extend({
		coursel:function(options,val){
			//1.实现隐士迭代和链式调用
			return this.each(function(){
				var $elem = $(this);
				//2. 单例模式
				var coursel = $elem.data('coursel');
				if(!coursel){
					//利用面向对象完成下拉菜单功能
					options = $.extend({},Coursel.DEFAULT,options);
					coursel = new Coursel($elem,options)
					$elem.data('coursel',coursel)
				}
				//判断当传入的参数是方法时,则调用该方法
				if(typeof coursel[options] == 'function'){
					//调用显示隐藏方法时必须传入jQuery对象
					coursel[options](val);
				}
			})
		}
	})
})(jQuery);