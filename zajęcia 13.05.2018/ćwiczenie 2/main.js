$(document).ready(function(){
	listener_jajko();
});
function listener_jajko(){
	$('.button').on('click',function(){
	var numer=$(this).data('numer');
	var txt="kliknięto przycisk numer :" + numer;
	$('.box').html(txt);
	$('.button').removeClass('buttonActive');
	$(this).addClass('buttonActive');
});
}
