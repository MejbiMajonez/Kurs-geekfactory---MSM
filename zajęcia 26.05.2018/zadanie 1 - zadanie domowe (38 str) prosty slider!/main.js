$(document).ready(function(){
	zaznaczam_sekcje();
	listener_dupa();
	jajko();
	console.log(Math.sqrt(4));
});
function zaznaczam_sekcje(){
	$(window).scroll(function(){
		w_top=$(window).scrollTop()+120;
		$('.sekcja').each(function(){
			if(w_top>=$(this).offset().top){
				$('.btn').removeClass('btn_active');
				$('#'+$(this).data('type')).addClass('btn_active');
			}
		});
	});
}
function listener_dupa(){
	$('.btn').on('click',function(){
		var id =$(this).attr('id');
		var wtop=$('#s'+id).offset().top;
		$('html,body').animate({
		scrollTop:wtop
		},1000);
	});
}
function jajko(){ //WAŻNE!!!!
	$('.sekcja').each(function(){
		console.log($(this).offset());
	});
	
}