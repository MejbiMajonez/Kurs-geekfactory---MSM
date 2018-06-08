$(document).ready(function(){
	listener_kwadracik();
	listener_jajeczko();
});
function listener_jajeczko(){
$('.jajeczko').on('click',function(){
	$(this).toggleClass('kwadracik',2000);
});
}
function listener_kwadracik(){
$('.kwadracik').on('click',function(){
	if($(this).hasClass('kwadracik')){
		$(this).removeClass('kwadracik');
	}else{
		$(this).addClass('kwadracik');
	}
});
}
