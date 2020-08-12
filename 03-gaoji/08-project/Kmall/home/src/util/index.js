module.exports = {
	validate:function(value,type){
		if(type == 'required'){
			return !!value
		}
		else if(type == 'username'){
			return /^[a-z][a-z0-9_]{2,5}$/.test(value)
		}
		else if(type == 'password'){
			return /^\w{3,6}$/.test(value)
		}
	},
	showSuccessMsg:function(msg){
		alert(msg)
	},
	showErrMsg:function(msg){
		alert(msg)
	}
}