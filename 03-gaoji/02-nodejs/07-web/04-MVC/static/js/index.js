;(function($){
	const $input = $('.todo-input');
	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			$.ajax({
				url:'/add',
				type:'post',
				data:{task:$input.val()},
				dataType:'json',
				success:function(result){
					if(result.code == 0){
						const data = result.data;
						let $dom = $(`<li class="todo-item" data-id=${data.id}>${data.task}</li>`);
						$('.todo-list').append($dom);
						$input.val('');
					}else{
						console.log(data.message);
					}
				},
				error:function(err){
					console.log(err);
				}
			})
		}
	})
	// 由于新生成的li无法触发删除事件,所以采用事件代理的形式绑定事件()
	$('.todo-list').on('click','.todo-item',function(){
		var $this = $(this);
		let id = $this.data('id');
		// 1.在li上绑定id 
		// 2.根据独一无二的id删除相应的li
		$.ajax({
			url:'del',
			type:'get',
			dataType:'json',
			data:{
				id:id
			},
			success:function(data){
				if(data.code == 0){
					$this.remove();
				}else{
					console.log(data.message)
				}
			},
			error:function(err){
				console.log(err);
			}
		})
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