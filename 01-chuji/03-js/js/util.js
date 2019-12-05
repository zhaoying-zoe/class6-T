/*
	obj 要改变的是那个元素
	attr 要改变的是那个属性
	target 要将该属性的值改到多少
*/
function animate(obj,attr,target){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 0;
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current = Math.round(current * 100);
		}
		if(current < target){
			iSpeed = 8;
		}else{
			iSpeed = -8;
		}
		if( Math.abs(target - current) < Math.abs(iSpeed)){
			if(attr == 'opacity'){
				obj.style[attr] = target/100;
			}else{
				obj.style[attr] = target + 'px';
			}
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style[attr] = (current + iSpeed)/100;
			}else{
				obj.style[attr] = current + iSpeed + 'px';
			}
			
		}
	},30);
}
function animate2(obj,attr,target,isLinear,fn){
	// 参数如果不传入默认为undefined;此处用来判断传入值如果为true:发生匀速运动 传入值为false:发生减速运动
	if(isLinear = undefined) {
		isLinear = true;//当传入值为undefined时转换成true
	}
	var isStop = false;//定义变量[0]
	clearInterval(obj.timer)//多次移动后,后一个定时器会覆盖前一个定时器,所以需要每次执行函数时都需要关闭由于多次移动触发的定时器
	obj.timer = setInterval(function(){//设置定时器:为了让动画持续进行
		// console.log(obj.timer)
		oCurrent = parseFloat(getComputedStyle(obj,false)[attr]);//获取元素属性
		if(attr == 'opacity') {//如果传入值为opacity,则执行下面的公式
			oCurrent = Math.round(oCurrent * 100);
		}
		console.log(oCurrent);
		var oSpeed = 0;//定义速度
		if(isLinear) {//通过判断传入的第四个值:若传入值为true则匀速运动;否则减速运动
			if(Current > target){//如果当前值大于目标值
				oSpeed = -2;//匀减速
			}else{//如果当前值小于目标值
				oSpeed = 2;//匀加速
			}
			if(Math.abs(Current - target) < Math.abs(oSpeed)){
				if(attr == 'opacity'){//如果传入值为opacity,则执行下列代码
					obj.style[attr] = (Current + oSpeed)/100;
				}else{//如果传入值不为opacity,则执行下列代码(最后加上字符串px)
					obj.style[attr] = Current + oSpeed + 'px';
				}
				// clearInterval(obj.timer);
				isStop = true;//给isStop赋值
			}
		}else{//减速运动
			oSpeed = (target - oCurrent)/10;//给减速动画的速度赋值
			oSpeed < 0 ? oSpeed = Math.floor(oSpeed) : oSpeed = Math.ceil(oSpeed);
			if(!oSpeed){//如果速度为0则关闭定时器(通过改变控制定时器的变量来关闭)
				// clearInterval(obj.timer);//关闭定时器
				isStop = true;//给控制定时器的变量赋值
			}
		}
		if(isStop){//判断变量[0]的值来关闭定时器
			clearInterval(obj.timer);//通过判断isStop的值来关闭定时器
			//fn(); 
			typeof fn == 'function' && fn();//如果第五个传入的值的类型为'function',则执行 与 后面的
		}else{
			if(attr == 'opacity') {
				obj.style[attr] = (oCurrent + oSpeed)/100;//变化值为 (当前值 + 速度)/100
			}else{
				obj.style[attr] = oCurrent + oSpeed + 'px';//移动值为 当前值 + 速度
			}
		}
	},30)
}
function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}
function getScrollLeft(){
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
}