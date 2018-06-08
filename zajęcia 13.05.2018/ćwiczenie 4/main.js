$(document).ready(function(){
	listener_btn();
});
function listener_btn(){
	$('.btn').on('click',function(){
	var zwi=$(this).data('zw');
		if(zwi=='zw1'){
			txt='kura robi kukuryku';
		}
		if(zwi=='zw2'){
			txt='krowa robi muuuu';
		}
		if(zwi=='zw3'){
			txt='Żaba robi rebbet';
		}
		$('.box').html(txt);
		
		
	});
	
	
}