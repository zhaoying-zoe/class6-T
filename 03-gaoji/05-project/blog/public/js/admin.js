(function($){
	$('.del').on('click',function(){
		// 弹出提示框确认信息
		if(!window.confirm('确定删除吗?臭弟弟？')){
			return false;
		}
	})
})(jQuery);