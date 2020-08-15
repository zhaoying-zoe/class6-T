require('pages/common/footer')
var _side = require('pages/common/side');
require('pages/common/nav')
require('pages/common/search')
require('./index.css');

var _util = require('util');
var api = require('api');
var tpl = require('./index.tpl');

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
		// 侧边栏选中状态
		this.renderSide();
		// 绑定事件
		this.bindEvent();
		// 获取登录状态信息,判断用户名是否退出
		this.getUserInfo();
	},
	renderSide:function(){
		_side.render('user-update-password');
	},
	bindEvent:function(){
		var _this = this;
		$('#btn-submit').on('click',function(){
			_this.submit();
		})
		//监听键盘事件提交表单
		$('.side-content input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submit()
			}
		})
	},
	getUserInfo:function(){
		// 发送ajax
		api.getUserInfo({})
	},
	submit:function(){
		//1.获取数据
		var formData = {
			password:$.trim($('[name="password"]').val()),
			repassword:$.trim($('[name="repassword"]').val()),
		}
		//2.验证数据合法性
		var validateFormData = this.validate(formData)
		//3.验证通过发送请求
		if(validateFormData.status){// 验证通过
			//隐藏错误提示
			formDataMsg.hide();
			// 发送ajax
			api.updatePassword({
				data:formData,
				success:function(data){
					// window.location.href = '/result.html?type=updatePassword';
					_util.goResult('updatePassword');
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
		// 5.验证两次密码是否一致
		if(formData.password != formData.repassword){
			result.meg = '两次密码输入不一致';
			return result;
		}
		result.status = true;

		return result;
	}
}


// $(function() {}) 是$(document).ready(function()的简写
$(function(){
	page.init();
})