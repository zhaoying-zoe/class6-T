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
	showSuccessMsg:function(msg){
		alert(msg)
	},
	showErrMsg:function(msg){
		alert(msg)
	}
}