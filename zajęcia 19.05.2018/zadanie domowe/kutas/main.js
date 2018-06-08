$(document).ready(function(){
	start_animacji();
});
function start_animacji(){
	$('#kw1').animate({
		bottom:"40px",
		transform: scaleY(1.5),
		transform-origin: bottom,
		
		
	},3000,function(){
	console.log('dotarłem');//po zakończeniu animacji ta część zostanie wywołana!
	$('#kw1').animate({
		left:"400px",
		bottom:"0px",
		
		
	},5000, function(){
		start_animacji();
	
	
	});
	
	
});//czas w którym one mają się zmieniać np ,,3000ms''
	
}