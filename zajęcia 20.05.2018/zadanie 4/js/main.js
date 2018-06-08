function ukryj(){
	$('#jezyk_1').hide('blind',{direction:'left'},1000);
	$('#jezyk_2').hide('explode',{},1000);
	$('#jezyk_3').hide('clip',{direction:'horizontal'},2000);
	$('#jezyk_4').hide('shake',{},1000);
}
function pokaz(){
	$('#jezyk_1').show('blind',{direction:'up'},1000);
	$('#jezyk_2').show('explode',{},1000);
	$('#jezyk_3').show('clip',{direction:'horizontal'},2000);
	$('#jezyk_4').show('shake',{},1000);
}