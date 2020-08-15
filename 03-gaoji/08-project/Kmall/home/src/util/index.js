import Hogan from 'hogan.js'

module.exports = {
	validate:function(value,type){
		if(type == 'required'){
			return !!value
		}
		// 用户名验证
		else if(type == 'username'){
			return /^[a-z][a-z0-9_]{2,5}$/.test(value)
		}
		// 密码验证
		else if(type == 'password'){
			return /^\w{3,6}$/.test(value)
		}
		// 手机号验证
		else if(type == 'phone'){
			return /^1[35678]\d{9}$/.test(value)
		}
		// 邮箱验证
		else if(type == 'email'){
			return /^\w+@\w+\.\w{2,6}$/.test(value)
		}
	},
	goResult:function(url){
		window.location.href = '/result.html?type='+url;
	},
	goLogin:function(){
		window.location.href = '/user-login.html?redirct='+window.location.href;
	}
	,
	showSuccessMsg:function(msg){
		alert(msg)
	},
	showErrMsg:function(msg){
		alert(msg)
	},
	getParamsUrl:function(keywords){
		// 获取地址栏信息参数
		var query = (window.location.search.substr(1));
		// type=register
		// type=register&name=tom
		// name=tom&type=register
		// name=tom&type=register&age=20

		// 正则:用来匹配地址栏的url
		var reg = new RegExp('(^|&)'+keywords+'='+'([^&]*)($|&)')
		var result = query.match(reg);
		return result ? decodeURIComponent(result[2]) : null;
		console.log(result[2]);
	},
	render:function(tpl,data){
		var template = Hogan.compile(tpl);
		var html = template.render(data);
		return html;
	}
}