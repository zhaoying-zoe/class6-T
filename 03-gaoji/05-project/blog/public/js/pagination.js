(function($){
	$.fn.extend({
		pagination:function(options){
			// console.log(this)
			var $elem = $(this);
			$elem.on('click','a',function(){
				var $this = $(this);
				// console.log(this)
				// 1.获取当前页(并转化为数字类型)
				var currentPage = $elem.find('.active a').html()/1;
				// console.log(currentPage)
				
				// 2.根据当前页计算具体页码
				var labelText = $this.attr('aria-label');// 获取属性的值
				// console.log(labelText)
				
				var page = 1;
				if(labelText == 'Next'){
					page = currentPage + 1;
				}else if(labelText == 'Previous'){
					page = currentPage - 1;
				}else{
					page = $this.html()/1;
				}
				// console.log(page)
				
				// 3.发送ajax
				var id = $elem.data('id');
				var url = options.url +'?page='+page;
				if(id){
					url = url+'&id='+id;
				}
				$.ajax({
					url:url,
					type:'GET',
					dataType:'json'
				})
				.done(function(result){
					if(result.code == 0){
						// console.log(result.data)
						$elem.trigger('get-data',result.data);
					}
				})
				.fail(function(err){
					console.log(err);
				})
			})
		}
	})
})(jQuery);