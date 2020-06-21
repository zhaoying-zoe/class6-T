;(function($){
	function Coursel($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$courselItems = this.$elem.find('.carousel-item');
		this.$courselBtns = this.$elem.find('.btn-item');
		this.$courselControls = this.$elem.find('.control');
		this.itemLength = this.$courselItems.length;

		this.timer = null;
		//显示当前索引值
		this.now = this._getCorrentIndex(this.options.activeIndex);
		//2.初始化
		this.init()

	} 
	Coursel.prototype = {
		constructor:Coursel,
		init:function(){
			var _this = this;
			//默认加载第一张图片
			this.$elem.trigger('coursel-show',[this.now,this.$courselItems[this.now]]);
			
			if(this.options.slide){//动画切换左右划入划出
				//1.隐藏所有图片显示当前图片
				this.$elem.addClass('slide');
				this.$courselItems.eq(this.now).css({left:0});
				//获取当前图片容器的宽度
				this.itemWidth = this.$courselItems.eq(this.now).width();
				//5.初始化移动插件
				this.$courselItems.move(this.options)
				//监听移动事件
				this.$courselItems.on('move',function(ev){
					var index = _this.$courselItems.index(this)
					if(_this.now != index){
						_this.$elem.trigger('coursel-show',[index,this]);
					}
				})
				//4.(事件代理)监听点击左右按钮实现动画切换
				this._tab = this._slide;
			}else{//动画切换淡入淡出
				//1.隐藏所有图片显示当前图片
				this.$elem.addClass('fade');
				this.$courselItems.eq(this.now).show();
				//4.(事件代理)监听点击左右按钮实现动画切换
				this._tab = this._fade;
				//5.初始化显示隐藏插件
				this.$courselItems.showHide(this.options);
				//监听显示隐藏事件
				this.$courselItems.on('show',function(ev){
					_this.$elem.trigger('coursel-show',[_this.$courselItems.index(this),this]);
				})
				
			}

			//淡入淡出和划入划出代码共通
			//2.底部按钮选中状态
			this.$courselBtns.eq(this.now).addClass('active');
			//3.监听事件显示左右点击按钮
			this.$elem.hover(function(){
				this.$courselControls.show();
			}.bind(this),function(){
				this.$courselControls.hide();
			}.bind(this));
			//4.(事件代理)监听点击左右按钮实现动画切换
			this.$elem.on('click','.control',function(ev){
				//阻止事件冒泡
				ev.stopPropagation();
				var $this = $(this);
				if($this.hasClass('control-left')){//点击左按钮
					_this._tab(_this._getCorrentIndex(_this.now-1))
				}else if($this.hasClass('control-right')){//点击右按钮
					_this._tab(_this._getCorrentIndex(_this.now+1));
				}
			});
			//6.自动轮播
			if(this.options.autotime){
				this.autoplay();
				//监听事件移入停止轮播移出开始轮播
				this.$elem.hover($.proxy(this.paused,this),$.proxy(this.autoplay,this));
			};
			//7.监听底部按钮点击事件
			this.$courselBtns.on('click',function(){
				//获取当前按钮下标
				var index = _this.$courselBtns.index($(this));
				_this._slide(index)
			})
		},
		_fade:function(index){
			//5.当当前显示和将要显示的值相同时则不切换
			if(this.now == index) return ;
			//1.隐藏当前图片
			this.$courselItems.eq(this.now).showHide('hide')
			//2.显示下一张图片
			this.$courselItems.eq(index).showHide('show')
			//3.更新底部按钮状态
			this.$courselBtns.eq(this.now).removeClass('active');
			this.$courselBtns.eq(index).addClass('active');
			//4.更新索引
			this.now = index;
		},
		_slide:function(index,direction){
			//index表示将要显示的下标
			//direction表示滑动的方向
			if(index > this.now){
				direction = 1;
			}else{
				direction = -1;
			}
			//5.当当前显示和将要显示的值相同时则不切换
			if(this.now == index) return ;
			//将将要显示的图片放到容器指定位置
			this.$courselItems.eq(index).css('left',direction*this.itemWidth)
			//1.隐藏当前图片
			this.$courselItems.eq(this.now).move('x',-1*direction*this.itemWidth);
			//2.显示下一张图片
			this.$courselItems.eq(index).move('x',0)
			//3.更新底部按钮状态
			this.$courselBtns.eq(this.now).removeClass('active');
			this.$courselBtns.eq(index).addClass('active');
			//4.更新索引
			this.now = index;
		},
		_getCorrentIndex:function(num){
			if(num >= this.itemLength){
				num = 0;
			}
			if(num < 0){
				num = this.itemLength - 1;
			}
			return num;
		},
		autoplay:function(){
			this.timer = setInterval(function(){
				this.$courselControls.eq(1).trigger('click')
			}.bind(this),this.options.autotime)
		},
		paused:function(){
			clearInterval(this.timer);
		}
	}

	//如果不传递参数则使用默认配置信息
	Coursel.DEFAULT = {
		slide:true,
		activeIndex:1,
		js:true,
		mode:'fade',
		autotime:5000
	}

	$.fn.extend({
		coursel:function(options){
			//1.实现隐式迭代和链式调用
			return this.each(function(){
				var $elem = $(this);
				//2.单例模式
				var coursel = $elem.data('coursel');
				if(!coursel){
					//利用面向对象完成下拉菜单功能
					options = $.extend({},Coursel.DEFAULT,options);
					coursel = new Coursel($elem,options);
					$elem.data('coursel',coursel);
				}
				//判断当传入的参数是方法时,则调用该方法
				if(typeof coursel[options] == 'function'){
					coursel[options]();
				}
			})
		}
	})
})(jQuery);