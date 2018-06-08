$(document).ready(function(){
liston();

	
});
function liston(){
	$('.btn').on('click',function(){
		animacja(1);
		listoff();
	});
}
function animacja(przebieg){
	$('.ball').animate({
		left:'580px',
		top:'80px'
	},2000,function(){
			$('.ball').animate({
			left:'0px',
			top:'0px'
			},2000,function(){
				przebieg++;
				if(przebieg<=3){
					animacja(przebieg);
					
				}else{
					$('.btn').removeClass('btnoff');
					liston();
				}
			});
	});
}
function listoff(){
	$('.btn').off();
	$('.btn').addClass('btnoff');
}