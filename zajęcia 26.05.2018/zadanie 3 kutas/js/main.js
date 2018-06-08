$(document).ready(function(){
	powieksz();
});
function powieksz(){
$('.jk').on('click',function(){
	var duzy =$('.kutaz').hasClass('big');
	var jajo2=$(this).data('jajo');
	console.log(jajo2);
	console.log(duzy);
	if((jajo2=='prawe')&&(!duzy)){
		$('.kutaz').addClass('big',5000,function(){kolor();});
	}else if ((jajo2=='lewe')&&(duzy)){
		$('.kutaz').removeClass('big',2000,function(){kolor();});
	}
});
}
function kolor(){
	$('.kutaz').toggleClass('kolor',3000);
}