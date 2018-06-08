$(document).ready(function(){
jajko(1);



});
function jajko(x){
if(x==1){
$('#knefelek1').hide('blind',{direction:'left'},1000);}
else if(x==2){
txt='36';}
else if(x==3){
txt='35';}
else if(x==4){
txt='34';}
else if(x==5){
txt='33';}
else if(x==6){
txt='32';}
else if(x==7){
txt='31';}
else if(x==8){
txt='30';}
else if(x==9){
txt='29';}
else if(x==10){
txt='28';}
else if(x==11){
txt='27';}
else if(x==12){
txt='26';}
else if(x==13){
txt='25';}
else if(x==14){
txt='24';}
else if(x==15){
txt='23';}
else if(x==16){
txt='22';}
else if(x==17){
txt='dupa Jeża';}
else{
txt='dupa Jeża';}
$('.box').append(txt+'<br><br>');
x++;
if(x<=18){
setTimeout(function(){
jajko(x);},1000);


	
}
}