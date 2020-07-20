(function($){
    ClassicEditor
	.create(document.querySelector('#content'),{
		language:'zh-cn',
		ckfinder:{
			uploadUrl:'/article/uploadImage'
		}
	})
	.then(editor=>{// 返回的promise对象调用then方法
		window.editor = editor
	})
	.catch(err=>{// 返回的promise对象调用catch方法
		console.log(err)
	})
})(jQuery);