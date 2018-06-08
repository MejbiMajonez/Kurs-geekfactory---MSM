$(document).ready(function(){
jajko(1);



});
function jajko(x){
if(x==1){
txt='D';}
else if(x==2){
txt='U';}
else if(x==3){
txt='P';}
else{
txt='a';}
$('.box').append(txt);
x++;
if(x<=4){
setTimeout(function(){
jajko(x);},2000);


	
}
}