

(function(w){
	function kQuery(selector){
		return new kQuery.prototype.inte(selector);
	}
	kQuery.fn = kQuery.prototype = {
		constructor:kQuery,// 给原型添加constructor
		inte:function(selector){
			// 1.传入的布尔值是false
			if(!selector){// 如果传入参数不是布尔值(false)
				return this;
			}
			// 2.传入函数
			// else if(kQuery.isFunction(selector)){// 如果传入的参数类型为函数
			// 	this[0] = document;
			// 	this.context = document;
			// 	this.length = 1;
			// 	window.addEventListener('DOMContentLoaded',selector);// 页面加载完毕时执行函数
			// 	return this;
			// }
			// 3.传入字符串
			else if(kQuery.isString(selector)){
				// 3.1 传入字符串代码
				if(kQuery.isHtml(selector)){
					var temDom = document.createElement('div');
					temDom.innerHTML = selector;
					for(var i = 0;i<temDom.children.length;i++){
						this[i] = temDom.children[i];
					}
					this.length = temDom.children.length;
					return this;
				}
				// 3.2 传入选择器
				else{
					var doms = document.querySelectorAll(selector);
					// console.log(22)
					for(var i = 0;i < doms.length;i++){
						this[i] = doms[i];
					}
					this.length = doms.length;

					return this;
				}

			}
			// 4.传入数组
				else if(kQuery.isArray(selector)){
					// 4.1 真数组
					for(var i = 0;i<selector.length;i++){
						this[i] = selector[i];
					}
					this.length = selector.length;
					return this;
					// 4.2 假数组
				}
			// 5.传入对象
				else{
					this[0] = selector;
					this.length = 1;
					return this;
				}
		},
		get:function(index){

			if(){
				
			}
		}
	}

	// 定义静态方法
	kQuery.isFunction = function(str){
		return typeof str == 'function';
	}
	kQuery.isString = function(str){
		return typeof str == 'string';
	}
	kQuery.isHtml = function(str){
		return /<[^<>]>+/.test(str);
	}
	kQuery.isArray = function(str){
		return typeof str == 'object' && length in str;
	}

	kQuery.fn.inte.prototype = kQuery.fn;// 给inte定义新的原型

	w.kQuery = w.$ = kQuery;// 把函数
})(window);