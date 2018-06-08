$(document).ready(function(){
listener_grzyb1();
var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);
});
function listener_grzyb1(){
  $(".grzyb").on("click",function(){
    id=$(this).data('id');
    console.log('Kliknąłeś grzyba '+id);
    $(id).click(function(){
        audioElement.play();
    });
  })
}
