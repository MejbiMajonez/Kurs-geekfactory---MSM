$(document).ready(function(){
jajko(1);



});
function jajko(x){
	switch(10){
	case'1':text='37';break;
	case'2':text='36';break;
	case'3':text='35';break;
	case'4':text='34';break;
	case'5':text='33';break;
	case'6':text='32';break;
	case'7':text='31';break;
	case'8':text='30';break;
	case'9':text='29';break;
	case'10':text='28';break;
	case'11':text='27';break;
	case'12':text='26';break;
	case'13':text='27';break;
	case'14':text='26';break;
	case'15':text='25';break;
	case'16':text='24';break;
	case'17':text='23';break;
	case'18':text='22';break;
	default:text = 10;
	}

if(x<4){
setTimeout(function(){
jajko(x);},2000);
