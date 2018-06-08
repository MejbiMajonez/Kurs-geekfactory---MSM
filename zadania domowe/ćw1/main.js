$(document).ready(function(){
	listener_tab();
	$('#t1').show();
	$('#tab1').addClass('tabActive');
	
});
function listener_tab(){
	$('.tab').on('click',function(){
		$('.box').hide();
		var zm=$(this).data('cel');
		console.log(zm);
		$('#'+zm).show();
		$('.tab').removeClass('tabActive');
		$(this).addClass('tabActive');
		
		
	});
}	