;(function($){
	function Search($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$searchForm = this.$elem.find('.search');
		this.$searchInput = this.$elem.find('.search-input');
		this.$searchBtn = this.$elem.find('.search-btn');
		this.$searchLayer = this.$elem.find('.search-layer');

		this.isLoadedHTML = false;
		
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
			// 监听提交数据事件
			this.$searchBtn.on('click',$.proxy(this.submit,this));
		},
		submit:function(){
			// console.log(this)
			// 如果输入框的值是空则不提交数据
			if(!this.getInputVal()){
				return false;
			}
			// 数据合法则提交表单数据
			// console.log(233)// 测试
			this.$searchForm.trigger('submit')
			// console.log(233)// 测试
		},
		getInputVal:function(){
			// 获取输入框中的值的函数
			return $.trim(this.$searchInput.val());// 返回输入框中的值
		},
		autocomplete:function(){
			// 1.初始化显示隐藏插件
			this.$searchLayer.showHide(this.options);
			// 2.监听输入框的输入事件
			this.$searchInput.on('input',$.proxy(this.getData,this));
			// this.$searchBtn.on('click',this.submit);
			// 3.监听点击页面空白部分隐藏搜索下拉层
			$(document).on('click',function(){
				// 隐藏搜索下拉层
				this.hideLayer();
			}.bind(this))
			// 4.点击搜索框阻止事件冒泡
			this.$searchInput.on('click',function(ev){
				ev.stopPropagation();
			})
			// 5.监听获取焦点显示下拉层
			this.$searchInput.on('focus',function(){
				// 判断输入框中是否有值
				if(this.getInputVal()){
					this.showLayer();					
				}
			}.bind(this))
			// 6.(事件代理形式监听事件)点击每一项提交数据
			var _this = this;
			this.$elem.on('click','.search-item',function(){
				// 1.获取当前点击项的值
				var val = $(this).html()
				// console.log(val);// 检查当前点击的值
				// 2.把值赋给输入框
				_this.setInputVal(val);
				// 3.提交数据
				_this.submit();
			})
		},
		getData:function(){
			// 如果输入框中的值是空则不发送
			if(!this.getInputVal()){
				// 如果输入框没数据则隐藏下拉层
				this.hideLayer();
				return false;
			}
			// 发送请求获取数据
			$.ajax({
				url:this.options.url+this.getInputVal(),
				dataType:'jsonp',
				jsonp:'callback'
			})
			.done(function(data){
				// console.log(data);
				this.$elem.trigger('getSearchData',[data]);
				/*
				// 1.生成html结构
				var html = '';
				for(var i = 0;i<data.result.length;i++){
					html += '<li>' + data.result[i][0] + '</li>';
				}
				// console.log(html);
				
				// 2.把html结构添加到下拉层
				this.appendHtml(html);
				// 3.显示下拉层
				if(this.isLoadedHTML == ''){
					this.hideLayer();
				}else{
					this.showLayer();
				}
				*/
			}.bind(this))
			.fail(function(err){
				this.$elem.trigger('getNoSearchData');
			})
		},
		appendHtml:function(html){
			// 插入html内容
			this.$searchLayer.html(html);
			// 双非:把html定义为布尔值(有值则为true 无值则为false)
			this.isLoadedHTML = !!html;
		},
		showLayer:function(){
			if(!this.isLoadedHTML) return;
			this.$searchLayer.showHide('show');
		},
		hideLayer:function(){
			this.$searchLayer.showHide('hide');
		},
		setInputVal:function(val){
			this.$searchInput.val(val);
		}
	}

	// 如果不传递参数则使用默认配置信息
	Search.DEFAULT = {
		autocomplete:true,// 是否显示下拉层
		url:'https://suggest.taobao.com/sug?q='
	}
	// https://search.jd.com/Search?keyword=s&enc=utf-8&pvid=3b09d7d7d42148d2a2c64a9cbc7e5f1a
	// url:'https://suggest.taobao.com/sug?code=utf-8&_ksTS=1528889766600_556&k=1&area=c2c&bucketid=17&q='



	$.fn.extend({
		search:function(options,val){
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
					search[options](val);
				}
			})
		}
	})
})(jQuery);