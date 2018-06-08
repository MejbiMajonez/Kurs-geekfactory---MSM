$(document).ready(function(){
	box1();
	
});
var produkty=Array(
Array('chleb',10,3);
Array('jaja',1,12);
Array('masło',2,1);
Array('kawa',12,1)
				);

var tablica = Array ('John','Bruno',15,'Stefan',minitablica,32);
//console.log(tablica[4][0]);
for (k in tablica){
	console.log('Dla klucza '+k+' mamy wartość');
	console.log(tablica[k]);
}
$.each(tablica,function(k,v){
	console.log('Dla klucza '+k+' mamy wartość:');
	console.log(v);
});
function box1(){
	$('#box1').append('Array');
});
