$(document).ready(function(){
	zaznaczam_sekcje();
	lecisz();
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