require('pages/common/logo')
require('pages/common/footer')
require('./index.css');

var _util = require('util');

$(function(){
	// page.init();
	// $('.register').show();
	var type = _util.getParamsUrl('type') || 'default';
	$('.'+type).show();
})