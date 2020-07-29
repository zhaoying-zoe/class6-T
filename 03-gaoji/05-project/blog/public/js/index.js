;(function($){
	var $registered = $('#registered');// 转到登录
	var $login = $('#login');// 转到注册
	var $registeredForm = $('#registered-form');// 注册表单
	var $loginForm = $('#login-form');// 登录表单
	var $user = $('#user');// 注册表单


	var $btnLogin = $('#btn-login');// 表单注册按钮
	var $usernameRegistered = $('#username-Registered');// 注册 用户名输入框
	var $passwordRegistered = $('#password-registered');// 注册 密码输入框
	var $repasswordRegistered = $('#repassword-registered'); // 注册 重复密码输入框
	
	var $btnRegistered = $('#btn-registered');// 表单登录按钮
	var $usernameLogin = $('#username-Login');// 登录 用户名输入框
	var $passwordLogin = $('#password-Login');// 登录 密码输入框

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
				type:'POST',
				datatype:'json',
				data:{
					username:username,
					password:password
				},
				success:function(data){
					if(data.code == 0){// 注册成功
						$registered.trigger('click');
						username = '';
						password = '';
						repassword = '';
					}else{
						alert('注册失败,请重新的输入!')
					}
				},
				err:function(err){
					alert('您的请求失败啦!请稍后再试!');
				}
			})
		}
	})

	// 4. 登录信息验证
	$btnLogin.on('click',function(){
		var username = $usernameLogin.val();
		var password = $passwordLogin.val();
		if(!usernameReg.test(username)){
			// alert('您好!用户名为3到9位字母开头,包含数字、下划线!')
			alert('你个菜逼,用户名输错了!');
		}else if(!passwordReg.test(password)){
			alert('您好!密码是3到8位包含字母、数字、下划线');
		}else{
			$.ajax({
				url:'/user/login',
				type:'POST',
				datatype:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){
				if(data.code == 0){// 登录成功
					/*
					$user.show();
					$loginForm.hide();
					$('user').find('span').html(data.user.username);
					*/
					window.location.reload();// 登陆成功,刷新页面
				}else{
					alert('登陆失败,请稍后再试!')
				}
			})
			.fail(function(err){
				alert('您的请求失败啦!请稍后再试!');
			})
		}
	})

	/*
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
	*/

	// 5.处理主页分页器
	var $articlePage = $('#article-page');
	// 构建首页函数
	function buildArticleHtml(articles){
		var html = '';
		articles.forEach(function(article){
			var createdTime = moment(article.createdAt).format('YYYY - MM - DD HH:mm:ss');
			html += `<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						<a href="/detail/${ article._id.toString() }"></a>${ article.title }
					</h3>
				</div>
				<div class="panel-body">
					${ article.intro }
				</div>
				<div class="panel-footer">
					<span class="glyphicon glyphicon-user"> ${ article.user.username }</span>
					<span class="glyphicon glyphicon-th-list"> ${ article.category.name }</span>
					<span class="glyphicon glyphicon-time"> ${ createdTime }</span>
					<span class="glyphicon glyphicon-eye-open"> ${ article.click }</span>
				</div>
			</div>`
		})


		return html;
	}

	// 分页器函数
	function buildPaginationHtml(page,list,pages){
		var html = '';
		html += `<ul class="pagination">`
		if(page == 1){
			html+= `<li class="disabled">
				        <a href="javascript:;" aria-label="Previous">
				            <span aria-hidden="true">&laquo;</span>
				        </a>
			        </li>`
		}else{
			html+= `<li>
			            <a href="javascript:;" aria-label="Previous">
			                <span aria-hidden="true">&laquo;</span>
			            </a>
			        </li>`
		}
		list.forEach(function(i){
			if(i == page){
				html+= `<li class="active"><a href="javascript:;">${ i }</a></li>`
			}else{
				html+= `<li><a href="javascript:;">${ i }</a></li>`

			}
		})
		if(page == pages){
				html+= `<li class="disabled">
				            <a href="javascript:;" aria-label="Next">
				                <span aria-hidden="true">&raquo;</span>
				            </a>
				        </li>`
		}else{
				html+= `<li>
				            <a href="javascript:;" aria-label="Next">
				                <span aria-hidden="true">&raquo;</span>
				            </a>
				        </li>`
		}
		html += `</ul>`
		return html;
	}

	// 监听事件构建HTML结构
	$articlePage.on('get-data',function(ev,data){
		// console.log(data.page);
		// 构建首页文章列表HTML结构
		$('#article-wrap').html(buildArticleHtml(data.docs));
		// 构建分页器
		if(data.pages > 1){
			$('#article-page').html(buildPaginationHtml(data.page,data.list,data.pages));
		}else{
			$('#article-page').html('');

		}
	})
	$articlePage.pagination({
		url:'/articles'
	})

	// 6.详情页分页逻辑
	var $commentPage = $('#comment-page');
	function buildCommentHtml(comments){
		var html = '';
		comments.forEach(function(comment){
			var createdTime = moment(comment.createdAt).format('YYYY - MM - DD HH:mm:ss')
			html += `<div class="panel panel-default">
			          	 <div class="panel-heading">
			              <h3 class="panel-title">${comment.user.username} 发布于 ${createdTime}</h3>
			            </div>
			            <div class="panel-body">
			              ${comment.content}
			            </div>
			          </div>`
		})
		return html;
	}
	//监听事件构建分页数据HTML结构
	$commentPage.on('get-data',function(ev,data){
		//构建详情评论数据结构
		$('#comment-wrap').html(buildCommentHtml(data.docs));
		//构建分页器
		if(data.pages > 1){
			$('#comment-page').html(buildPaginationHtml(data.page,data.list,data.pages))
		}else{
			$('#comment-page').html('')
		}
		
	})
	$commentPage.pagination({
		url:'/comment/list'
	})


})(jQuery);