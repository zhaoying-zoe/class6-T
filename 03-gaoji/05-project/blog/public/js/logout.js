	// 5. 处理退出逻辑
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout',
			type:'get'
		})
		.done(function(data){
			// 如果cookie被清除了,表示账号退出了,则把首页加载出来
			if(data.code == 0){
				window.location.href = '/';
			}
		})
		.fail(function(err){
			alert('您的退出失败了,请稍候再试!')
		})
	})