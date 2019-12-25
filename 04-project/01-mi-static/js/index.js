
handleCart();
handleNav();

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
	var oContainer = document.querySelector('.header-nav-content .container');
	var hiderTimer = 0;
	var dataTimer = 1;
	// 2.遍历添加事件
	for(var i = 0;i < aNavItem.length - 2;i++){
		// 2.1鼠标移入
		aNavItem[i].onmouseenter = function(){
			oContainer.innerHTML = '<div class="loader"></div>';
			oContainer.style.borderTop = '1px solid #ccc';
			animate(oNavContent,{height:180},true,function(){
				
			})
		}
		// 2.2鼠标移出
		aNavItem[i].onmouseleave = function(){
			oContainer.innerHTML = '';
			animate(oNavContent,{height:0},true,function(){
				
			})
		}
		var hiderTimer = setTimeout(function(){
			aNavItem[i].onmouseleave = function(){
				oContainer.innerHTML = '';
				animate(oNavContent,{height:0},true,function(){
					
				})
			}		
		},500)
		var dataTimer = setTimeout(function(){
			console.log(data)
		},1000)
	}
}