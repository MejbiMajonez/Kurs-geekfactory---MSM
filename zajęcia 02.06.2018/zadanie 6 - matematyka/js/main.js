$(document).ready(function () {
listener_box();
});
var timer;
function listener_box(){
  $('#knefel').on('click',function(){
    clearTimeout(timer);
    $('#box').html('');
    var max =$('#max').val();
    var dz =$('#dz').val();
    if(dz && max){
      jajko(max,dz,1);
  }else{
    $('#box').html('podaj liczby dziadu');
  }
  });
}
function jajko(max,dz,i){
  if(max>=i){
    if((i%dz)==0){
      txt='<div class="neo">'+ i +'jest podzielna </div>';
    }else{
      txt='<div>'+ i +'nie jest podzielna </div>';
    }
timer =setTimeout(function(){
    i++;
    $('#box').append(txt);
    jajko(max,dz,i);
  },1000);
}else{
  $('#max').val('');
  $('#dz').val('');
}
}
