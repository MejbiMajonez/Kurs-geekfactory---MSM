$(document).ready(function(){
	licz();
});
var produkty = Array(
Array('chleb',10,2), //przy arrayu dawać ,!!!!
Array('jaja',1,10),
Array('masło',2,4),
Array('kawa',12,1)
);
function licz(){
	var suma=0;
	for (k in produkty){
		console.log(produkty[k][0]);
		txt='<TR>'; //na początku zawsze ,,=" później ,,=+"!
			txt+='<TD>'+produkty[k][0]+'</TD>';
			txt+='<TD>'+produkty[k][1]+'</TD>';
			txt+='<TD>'+produkty[k][2]+'</TD>';
			txt+='<TD>'+(produkty[k][1]*produkty[k][2])+'</TD>';
		txt+='</TR>';
		console.log(txt);
		$('#cel').append(txt);
		suma+=(produkty[k][1]*produkty[k][2]);
	}
	$('#cel2').html('suma: '+suma);
}
