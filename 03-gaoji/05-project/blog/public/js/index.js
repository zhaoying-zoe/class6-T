;(function($){
	var $registered = $('#registered');// 转到注册
	var $login = $('#login');// 转到注册
	var $registeredForm = $('#registered-form');// 登录表单
	var $loginForm = $('#login-form');// 注册表单

	var $usernameLogin = $('#username-Login');// 登录用户名输入框
	var $btnRegistered = $('#btn-registered');// 表单注册按钮
	var $usernameRegistered = $('#username-Registered');// 注册 用户名输入框
	var $passwordRegistered = $('#password-registered');// 注册 密码输入框
	var $repasswordRegistered = $('#repassword-registered'); // 注册 重复密码输入框
	
	// 1. 登录 => 注册
	$registered.on('click',function(){
		// 隐藏登录页
		$registeredForm.hide();
		// 显示注册页
		$loginForm.show();
	})

	// 2. 注册 => 登录
	$login.on('click',function(){
		// 显示注册页
		$registeredForm.show();
		// 隐藏登录页
		$loginForm.hide();
	})

	// 3. 注册信息验证
	// 3.1 用户名为3到9位字母开头,包含数字、下划线
	var usernameReg = /^[a-z][a-z1-9_]{2,9}$/i;
	// 3.2 密码是3到8位包含字母、数字、下划线
	var passwordReg = /^\w{3,8}$/;
	// 3.3 注册按钮点击
	$btnRegistered.on('click',function(){
		var username = $usernameRegistered.val();
		var password = $passwordRegistered.val();
		var repassword = $repasswordRegistered.val();
		if(!usernameReg.test(username)){
			// alert('您好!用户名为3到9位字母开头,包含数字、下划线!')
			alert('你个菜逼,用户名输错了!');
		}else if(!passwordReg.test(password)){
			alert('您好!密码是3到8位包含字母、数字、下划线');
		}else if(password != repassword){
			alert('您好!两次输入的密码不一致');
		}else{
			$.ajax({
				url:'/user/register',
				type:'post',
				data:{
					username:username,
					password:password
				},
				success:function(data){
					console.log(data);
				},
				err:function(err){
					console.log(err);
				}
			})
		}
	})
})(jQuery);