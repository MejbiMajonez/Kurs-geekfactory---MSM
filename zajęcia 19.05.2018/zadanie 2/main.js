$(document).ready(function(){
	
	
});
var minitablica=Array('test1','test2');
//console.log(minitablica[1]);
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