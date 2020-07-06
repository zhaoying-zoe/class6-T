;(function($){
	$('.todo-input').on('keydown',function(ev){
		if(ev.keyCode == 13){
			$.ajax({
				url:'/add',
				type:'post',
				data:{task:$('.todo-input').val()},
				dataType:'json',
				success:function(data){
					console.log(data);
				},
				error:function(err){
					console.log(err);
				}
			})
		}
	})
})(jQuery);

/*
$.ajax({
    url:'./data.json', //请求的地址
    type:'GET',//指定请求的方法,默认是GET
    data:{name:'Tom',age:18},//发送到服务器的数据，字符串键值对或者对象
    dataType:'json',//返回数据的类型,可以是xml json script text html,默认是text
    success:function(返回数据,状态信息,jqXHR对象){},//请求成功后的回调函数
    error:function(jqXHR对象,状态信息){},//请求失败后的回调函数
    complete:function(jqXHR对象,状态信息){},//请求完成后的回调函数
    timeout:3000, //设置请求超时的时间,单位为毫秒
    statusCode:{304:function(){},503:function(){}.....}//设置不同状态码的回调函数
    headers:{test:'test'}//设置请求头
})
*/