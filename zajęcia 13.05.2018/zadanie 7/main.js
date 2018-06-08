$(document).ready(function(){
	licz(10);
	
});
function licz(x){
	if(x==0){
	$('.box').append('<br>Nowy rok');	
		
		
	}
	else{
	x--;

	$('.box').append('<br>+x');
	setTimeout(function(){
	licz(x);
	},1000);
	
	}
}