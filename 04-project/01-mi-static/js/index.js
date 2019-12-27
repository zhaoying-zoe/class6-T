
handleCart();
handleNav();
handleCarousel();
handleCate();
handleTime();
handleFlash();

// 购物车处理
function handleCart(){
	// 1.获取元素
	var oCart = document.querySelector('.container .cart');
	var oBox = document.querySelector('.cart a');
	var oCartContent = document.querySelector('.cart-content');
	var oLoader = document.querySelector('.container .loader');
	var oEmptyCart = document.querySelector('.container .empty-cart');
	// 2.添加事件
		// 2.1鼠标移入
	oCart.onmouseenter = function(){
		// console.log(2333)
		// 2.1.1变化购物车图标背景颜色和字体颜色
		oBox.style.backgroundColor = '#fff';
		oBox.style.color = '#ff6700';
		// 2.1.2显示加载图标
		oLoader.style.display = 'block';
		// 2.1.3卷出购物车
		animate(oCartContent,{height:100},true,function(){
		// 2.1.4获取购物信息并隐藏加载图标
			oLoader.style.display = 'none';
			oEmptyCart.style.display = 'block';
		})
	}
		// 2.2鼠标移出
	oCart.onmouseleave = function(){
		// 2.1.1变化购物车图标背景颜色和字体颜色
		oBox.style.backgroundColor = '#424242';
		oBox.style.color = '#b0b0b0';
		// 2.1.2显示加载图标
		oLoader.style.display = 'none';
		// 2.1.3卷入购物车
		animate(oCartContent,{height:0},true,function(){
			oLoader.style.display = 'none';
			oEmptyCart.style.display = 'none';
		})		
	}
}
// 处理导航部分
function handleNav(){
	// 1.获取元素
	var aNavItem = document.querySelectorAll('.header .header-nav-item');
	var oNavContent = document.querySelector('.header .header-nav-content');
	var oNavContainer = oNavContent.querySelector('.header-nav-content .container');
	var hiderTimer = 0;
	var dataTimer = 1;
	// 2.遍历添加事件
	for(var i = 0;i < aNavItem.length - 2;i++){
		// 2.1鼠标移入
		// 存i值
		aNavItem[i].index = i;
		aNavItem[i].onmouseenter = function(){
			clearTimeout(hiderTimer);
			oNavContainer.innerHTML = '<div class="loader"></div>';
			oNavContent.style.borderTop = '1px solid #ccc';
			oNavContent.style.overflow = 'visible';
			animate(oNavContent,{height:180},true,function(){
			})
			// 模拟数据加载
			clearTimeout(dataTimer);
			var index = this.index;
			dataTimer = setTimeout(function(){
				loadDate(index);
			},1000)
		}
		// 2.2鼠标移出
		aNavItem[i].onmouseleave = function(){
			hideoNavContent();
		}
	}
	function hideoNavContent(){
		hiderTimer = setTimeout(function(){
			oNavContent.style.overflow = 'hidden';
			animate(oNavContent,{height:0},true,function(){
				oNavContent.style.borderTop = 'none';
			})			
		},500)
	}
	oNavContent.onmouseenter = function(){
		clearTimeout(hiderTimer);
	}
	oNavContent.onmouseleave = function(){
		hideoNavContent();
	}
	function loadDate(index){
		var data = aNavListData[index];
		console.log(data);
		// 把data添加到html中,
		var html = '<ul>'
		for(var i = 0;i < data.length;i++){
			html +=		'<li>'
			html +=			'<div class="img-box">'
			html +=				'<a href="'+data[i].url+'">'
			html +=					'<img src="'+data[i].src+'" alt="">'
			html +=				'</a>'
			html +=			'</div>'
			html +=			'<p class="product-name">'+data[i].name+'</p>'
			html +=			'<p class="product-price">'+data[i].price+'元起</p>'
			if(data[i].tag){
				html +=			'<span class="tag">新品</span>'
			}
			html +=		'</li>'
		}
		html +=		'</ul>'
		oNavContainer.innerHTML = html;
	}
}
// 处理首页轮播图
function handleCarousel(){
	new Carousel({
			id:'carousel',
			aImg:['images/b1.jpg','images/b2.jpg','images/b3.jpg'],
			width:1226,
			height:460,
			playDuration:5000
		})
}
// 处理分类面板
function handleCate(){
	// 获取元素
	var oCateBox = document.querySelector('.cate-box');
	var aCateItem = oCateBox.querySelectorAll('.cate-item');
	var oCateContent = document.querySelector('.cate-content');

	// 遍历
	for(var i = 0;i < aCateItem.length;i++){
		aCateItem[i].index = i;
		// 1.分类项目样式的切换
		aCateItem[i].onmouseenter = function(){
			for(var j = 0;j < aCateItem.length;j++){
				aCateItem[j].className = 'cate-item';
			}
			this.className = 'cate-item active';
			// 2.显示分类面板
			oCateContent.style.display = 'block';
			loadCate(this.index);
		}
		// 3.离开分类项目和分类面板时隐藏分类面板，恢复分类项目的样式
		
	}
	oCateBox.onmouseleave = function(){
			oCateContent.style.display = 'none';
			for(var j = 0;j < aCateItem.length;j++){
				aCateItem[j].className = 'cate-item';
			}
		}
	// 4.加载功能
	function loadCate(index){
		var data = aCateLIstDate[index];
		console.log(data);
		var html = '<ul>'
		for(var i = 0;i < data.length;i++){
			html +=    '<li>'
			html +=        '<a href="'+data[i].url+'">'
			html +=             '<img src="'+data[i].image+'" alt="">'
			html +=				'<span>'+data[i].name+'</span>'
			html +=        '</a>'
			html +=    '</li>'
		}
		html +='</ul>'
		oCateContent.innerHTML = html;		
	}
}

// 处理倒计时功能
function handleTime(){
	var aTime = document.querySelectorAll('.flash .timer-num');
	var oTimer = 0;
	function toStr(attr){//判断时间如果是个位数,就在前面加0
		if(attr<10){
			return '0'+attr;
		}else{
			return ''+attr;
		}
	}
	handleTimer();
	function handleTimer(){
		// 1.获取结束时间转换为毫秒
		var date = new Date('2019/12/29 20:51:10');
		var endTime = date.getTime();
		// console.log(endTime)
		// 2.获取当前时间转换为毫秒
		var today = Date.now();
		// console.log(today)
		// 3.计算目标时间的毫秒和当前时间的毫秒的差，转换为时分秒
		
		var allMinutes = date - today;
		if(allMinutes < 0){
			allMinutes = 0;
		}
		// console.log(allMinutes);
		var iallSeconds = allMinutes / 1000;
		var iHour = parseInt(iallSeconds / 3600);
		var iMinutes = parseInt((iallSeconds % 3600)/60);
		var iSeconds = parseInt((iallSeconds % 3600)%60);		
		// console.log(iSeconds);		
		// 4.显示转换后的时分秒
		aTime[0].innerHTML = toStr(iHour);
		aTime[1].innerHTML = toStr(iMinutes);
		aTime[2].innerHTML = toStr(iSeconds);
	}
	setInterval(handleTimer,1000);
}

// 处理闪购商品切换
function handleFlash(){
	// 1.获取元素
	var aMove = document.querySelectorAll('.flash .move a');
	var oProductList = document.querySelector('.flash .bd .product-list');
	console.log(oProductList)
	// 2.添加事件
	aMove[1].onclick = function(){
		oProductList.style.marginLeft = '-978'+'px';
		// if(oProductList.marginLeft == '0px'){
		// 	oProductList.style.marginLeft = '-978px';
		// 	console.log(0);
		// }else{
		// 	oProductList.style.marginLeft = '0px';
		// 	console.log(1);
		// }	
	}
	aMove[0].onclick = function(){
		oProductList.style.marginLeft = '0px';
	}
}