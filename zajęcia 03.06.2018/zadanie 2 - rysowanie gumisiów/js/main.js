$(document).ready(function () {
listener_nd();
});
function listener_nd(){
  $('#no').change(function(){
    no=$(this).val();
    clearTimeout(dupa);
    $('.las').html('');
    if(no>0){
      rysuj_gumisia(no,0);
    }
  }
)
}
var dupa;
var gumisie = Array('1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg');
function rysuj_gumisia(no,nr){
  txt='<img src="img/'+gumisie[nr]+'">';
  $('.las').append(txt);
  nr++;
  if(no>nr){
dupa = setTimeout(function(){
      rysuj_gumisia(no,nr);
    },1000);
  }
}
