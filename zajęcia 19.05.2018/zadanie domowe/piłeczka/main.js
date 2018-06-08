$(document).ready(function(){
	start_animacji();
});
function start_animacji(){
	$('#kw1').animate({
		left:"481px",
		top:"61px",
		
		
	},3000,function(){
	console.log('dotarłem');//po zakończeniu animacji ta część zostanie wywołana!
	$('#kw1').animate({
		left:"0px",
		top:"0px",
		
		
	},5000, function(){
		start_animacji();
	
	
	});
	
	
});//czas w którym one mają się zmieniać np ,,3000ms''
	
}