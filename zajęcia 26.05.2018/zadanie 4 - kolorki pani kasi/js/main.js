$(document).ready(function(){
	start();
});
//zmienne globalne
var r='F';
var g='0';
var b='F';
function start(){
	zrob_boxy();
	zrob_knefle('r');
	zrob_knefle('0');
	zrob_knefle('b');
	styluj_knefle();
	sluchaj_knefli();
	koloruj();
}
function zrob_boxy(){
	txt='<div class="box_kolorow">to jest box na kolor</div>';
	$('.box').html(txt);
	$('.box_kolorow').css({
		'border':'1px solid #000',
		'margin':'10px 0px',
		'height':'100px',
		'padding':'10px'
	});
	$('.box_kolorow').addClass('anim');
	txt='<div class="box_knefli">To jest box na knefle</div>';
	$('.box').append(txt);
	$('.box_knefli').css({
		'borderTop':'1px solid #ccc',
		'margin':'10px 0px',
		'padding':'10px'
	});
}
function zrob_knefle(typ){
var label ='<div class="label">';
	if(typ=='r'){label+='czerwony :';}
	else if(typ=='g'){label+='czerwony :';}
else {label+='niebieski :';}
	
	
	label+='</div>';
	$('.box_knefli').append(label);
	for(i=0;i<=15;i++){
	var	rgb_value=zamien_na_hex(i.toString());
	box='<div class="knefel" id="knefel_'+typ+'_'+rgb_value+'" data-val="'+rgb_value+'" data-type="'+typ+'">'+rgb_value+'</div>';
	$('.box_knefli').append(box);
}
}

function styluj_knefle(){
	$('.label').css({
		'text-align':'center',
		'padding':'10px 0px',
		'backgroundColor':'#222',
		'color':'#fff',
		'float':'left',
		'width':'100%'
	});
	$('.knefel').css({
		'text-align':'center',
		'padding':'10px 0px',
		'backgroundColor':'#eee',
		'float':'left',
		'width':(1/16*100)+'%',
		'cursor':'pointer'
	});
	$('.knefel').addClass('anim');
	zaznacz_domyslne();
}
function zaznacz_domyslne(){
	$('#knefel_r_'+r).addClass('aktywny');
	$('#knefel_g_'+g).addClass('aktywny');
	$('#knefel_b_'+b).addClass('aktywny');
}
function koloruj(){
	$('.box_kolorow').css('backgroundColor','#'+r+g+b);
}
function sluchaj_knefli(){
	$('.knefel').on('click',function(){
		type = $(this).data('type');
		if(type=='r'){
			r = $(this).data('val');
		}else if(type=='g'){
		    g = $(this).data('val');
		}else if(type=='b'){
			b = $(this).data('val');
		}
		koloruj();
		$('.knefel').removeClass('aktywny');
		zaznacz_domyslne();
	});
}
function zamien_na_hex(wartosc){
	switch(wartosc){
		case'10': text='A';break;
		case'11': text='B';break;
		case'12': text='C';break;
		case'13': text='D';break;
		case'14': text='E';break;
		case'15': text='F';break;
		default: text = wartosc;
	}
	return text;
}