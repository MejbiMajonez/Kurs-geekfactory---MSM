$(document).ready(function(){
	//loop1();
	//loop2();
	//loop3();
	//loop4();
	//loop5();
});

	function kasa1(){
		var value = $('#kasa1').val();
		console.log(value);
		if (value>500){
		confirm('Dziękuję')}
		else{
			while(confirm('Czy jesteś pewien?')){
			alert ('Dawaj więcej kasy!');}
		}
	}