$(document).ready(function(){
	listener_kolor();
	listener_rozmiar();
});
function listener_kolor(){
	$('.knefel').on('click',function(){
		c=$(this).data('color');
		console.log(c);
		$('#text').css('color',c);
	
	
	});
}
function listener_rozmiar(){
	$('.knefel2').on('click',function(){
		r=$(this).data('size');
		console.log('dupa');
		$('#text').css('font-size',r);
		
		
	});
}
function lon(){
	loff();
	listener_kolor();
	listener_rozmiar();
}
function loff(){
	$('.knefel').off();
	$('.knefel2').off();
}
		