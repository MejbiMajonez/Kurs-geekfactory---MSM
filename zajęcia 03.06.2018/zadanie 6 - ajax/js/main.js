$(document).ready(function(){
  listener_frajera();
});
function listener_frajera(){
  window-addEventListener('keydown',function(e){
    var key = e.keyCode;
    console.log(key);
    console.log(String.fromCharCode(key));
    console.log('alt:'+e.altKey);
    console.log(e);
    if(key==37){alert('lewo');}
  },false);
}
