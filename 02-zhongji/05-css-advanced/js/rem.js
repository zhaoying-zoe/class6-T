;(function(win,doc){
	// 1.获取根元素
	var oRoot = document.getElementsByTagName('html')[0];
	// 2.获取视口宽度
	var iWidth = document.body.clientWidth || document.documentElement.clientWidth;
	console.log(iWidth);

	// 3.根据比例计算元素字体大小
	var oWidth = iWidth / 10;

})
(window,document);