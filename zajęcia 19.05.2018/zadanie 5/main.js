$(document).ready(function(){
	zadanie();
});
function zadanie(){
	$('.button').on('click',function(){
		var jajko = $(this).data('jajko');
		if (jajko ==1){$('#magik').css('display','inline');
		}else{$('#magik').hide();
		}
	});
}
