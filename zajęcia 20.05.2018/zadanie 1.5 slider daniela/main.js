$(document).ready(function(){
	listener_btn();
	$('#jajo').click();
});
function listener_btn(){
	$('.btn').on('click',function(){
		var img=$(this).data('img');
		$('.foto').css('backgroundImage','url("'+img+'")');
		$('.btn').removeClass('active');
		$(this).addClass('active');
		
	});
}