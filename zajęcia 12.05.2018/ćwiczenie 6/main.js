$(document).ready(function(){
	nienawidze_matmy();
});
function nienawidze_matmy(){
	x=15;
	y=7;
	
	$('#zm1').html(x);
	$('#zm2').html(y);
	wynik = x+y;
	$('#suma').html(wynik);
	wynik = x-y;
	$('#roznica').html(wynik);
	$('#iloczyn').html(x*y);
	$('#iloraz').html(x/y);
	$('#modulo').html(x%y);
}