;(function($){
	function Search($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$searchForm = this.$elem.find('.search');
		this.$searchInput = this.$elem.find('.search-input');
		this.$searchBtn = this.$elem.find('.search-btn');
		
		// console.log(this);

		//2.初始化
		this.init()

		// 判断是否显示下拉层
		if(this.options.autocomplete){
			this.autocomplete();
		}
	}
	Search.prototype = {
		constructor:Search,
		init:function(){
			//监听提交数据事件
			this.$searchBtn.on('click',$.proxy(this.submit,this));
			// this.$searchBtn.on('click',this.submit);

		},
		submit:function(){
			// console.log(this)
			// 如果输入框的值是空则不提交数据
			if(!this.getInputVal()){
				return false;
			}
			// 数据合法则提交表单数据
			this.$searchBtn.trigger('submit')
		},
		getInputVal:function(){
			// 获取输入框中的值的函数
			return $.trim(this.$searchInput.val());// 返回输入框中的值
		},
		autocomplete:function(){
			// 监听输入框的输入事件
			this.$searchInput.on('input',$.proxy(this.getData,this));
		},
		getData:function(){
			// 如果输入框中的值是空则不发送
			if(!this.getInputVal()){
				return false;
			}
			// 发送请求获取数据
			$.ajax({
				url:this.options.url+this.getInputVal(),
				dataType:'jsonp',
				jsonp:'callback'
			})
			.done(function(data){
				console.log(data);
			})
			.fail(function(err){
				console.log(err);
			})
		}
	}

	// 如果不传递参数则使用默认配置信息
	Search.DEFAULT = {
		autocomplete:true,
		url:'https://suggest.taobao.com/sug?q='
	}
	// https://search.jd.com/Search?keyword=s&enc=utf-8&pvid=3b09d7d7d42148d2a2c64a9cbc7e5f1a
	// url:'https://suggest.taobao.com/sug?code=utf-8&_ksTS=1528889766600_556&k=1&area=c2c&bucketid=17&q='



	$.fn.extend({
		search:function(options){
			//1.实现隐士迭代和链式调用
			return this.each(function(){
				var $elem = $(this);
				//2. 单例模式
				var search = $elem.data('search');
				if(!search){
					//利用面向对象完成下拉菜单功能
					options = $.extend({},Search.DEFAULT,options);
					search = new Search($elem,options)
					$elem.data('search',search)
				}
				//判断当传入的参数是方法时,则调用该方法
				if(typeof search[options] == 'function'){
					//调用显示隐藏方法时必须传入jQuery对象
					search[options]();
				}
			})
		}
	})
})(jQuery);