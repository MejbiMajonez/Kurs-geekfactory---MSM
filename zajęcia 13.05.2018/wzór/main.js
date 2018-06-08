function przelicz(){
	var liczba=$('#liczba').val();
	var hex=zmien_na_hex(liczba);
	$('#wynik').html(hex);
}
	

function zmien_na_hex(liczba){
	switch(liczba){
		case'10':hex='A';break;
		case'11':hex='B';break;
		case'12':hex='C';break;
		case'13':hex='D';break;
		case'14':hex='E';break;
		case'15':hex='F';break;
		default:hex=liczba;
	}
	
	
	
	return hex;
}
