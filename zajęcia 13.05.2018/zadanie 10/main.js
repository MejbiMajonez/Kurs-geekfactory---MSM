$(document).ready(function(){
jajko(1);



});
function jajko(x){
	switch(x){
	case1:txt='D';break;
	case2:txt='U';break;
	case3:txt='P';break;
	case4:txt='A';break;
	}

$('.box').append(txt);
x++;
if(x<4){
setTimeout(function(){
jajko(x);},2000);


	
}
}