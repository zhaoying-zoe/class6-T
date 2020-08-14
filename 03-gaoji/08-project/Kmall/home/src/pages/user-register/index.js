require('pages/common/logo')
require('pages/common/footer')
require('./index.css');

var _util = require('util');
var api = require('api');
var formDataMsg = {
	show:function(msg){
		$('.error-item')
		.show()
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item')
		.hide()
		.find('.error-msg')
		.text('')
	}
}

var page = {
	init:function(){
		var _this = this;
		$('#btn-submit').on('click',function(){
			_this.submit();
		})
		//监听键盘事件提交表单
		$('input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submit()
			}
		})
		// 用户名失去焦点验证
		$('[name="username"]').on('blur',function(){
			var username = $('[name="username"]').val();
			// 1.用户名非空验证
			if(!_util.validate(username,'required')){
				formDataMsg.show('请输入用户名');
				return
			}
			// 2.用户名合法性
			if(!_util.validate(username,'username')){
				formDataMsg.show('用户名是以字母开始的3-6位字符');
				return
			}
			api.checkUsername({
				data:{
					username:username,
				},
				success:function(data){
					formDataMsg.hide()
				},
				error:function(msg){
					formDataMsg.show(msg);
				}	
			})
		})
	},
	submit:function(){
		//1.获取数据
		var formData = {
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val()),
			repassword:$.trim($('[name="repassword"]').val()),
			phone:$.trim($('[name="phone"]').val()),
			email:$.trim($('[name="email"]').val()),
		}
		//2.验证数据合法性
		var validateFormData = this.validate(formData)
		//3.验证通过发送请求
		if(validateFormData.status){// 验证通过
			//隐藏错误提示
			formDataMsg.hide();
			// 发送ajax
			api.register({
				data:formData,
				success:function(data){
					// 注册成功
					window.location.href = '/result.html?type=register';
					console.log(233)
				},
				error:function(msg){
					formDataMsg.show(msg);
				}	
			})
		}else{// 验证不通过
			formDataMsg.show(validateFormData.meg)
		}
	},
	validate:function(formData){
		var result = {
			status:false,
			msg:''
		}
		// 1.用户名非空验证
		if(!_util.validate(formData.username,'required')){
			result.meg = '请输入用户名';
			return result;
		}
		// 2.用户名合法性
		if(!_util.validate(formData.username,'username')){
			result.meg = '用户名是以字母开始的3-6位字符';
			return result;
		}
		// 3.密码非空验证
		if(!_util.validate(formData.password,'required')){
			result.meg = '请输入密码';
			return result;
		}
		// 4.用户名合法性
		if(!_util.validate(formData.password,'password')){
			result.meg = '密码是3-6位任意字符';
			return result;
		}
		// 5.判断两次密码是否一致
		if(formData.password != formData.repassword){
			result.meg = '两次密码输入不一致';
			return result;
		}

		// 6.手机号非空
		if(!_util.validate(formData.phone,'required')){
			result.meg = '请输入手机号';
			return result;
		}
		// 7.手机号合法性验证
		if(!_util.validate(formData.phone,'phone')){
			result.meg = '手机号格式不正确';
			return result;
		}
		// 8.邮箱非空
		if(!_util.validate(formData.email,'required')){
			result.meg = '请输入邮箱';
			return result;
		}
		// 9.邮箱合法性验证
		if(!_util.validate(formData.email,'email')){
			result.meg = '邮箱格式不正确';
			return result;
		}


		result.status = true;
		return result;
	}
}



$(function(){
	page.init();
})