var obox=document.getElementById('box')
function fn(){
	obox.style.background='red';
}
//名函数简写👇
//obox.onclick=fn;
//匿名函数👇
obox.onclick=function(){
	fn()
}