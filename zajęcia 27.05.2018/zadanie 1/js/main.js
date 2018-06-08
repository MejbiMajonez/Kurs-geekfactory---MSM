$(document).ready(function(){
	up();
});
function up(){
	$('.kdo').animate({
		top:"50px"
	},2000,function(){
		$('.kdo').animate({
			'backgroundColor':'#F00'
	},1000,function(){dupa();});
	
});
}
function dupa(){
	$('.kdo').animate({
		'top':'190px',
		'left':'850px'
		
	});
}

