$(document).ready(function () {

});
function wyswietl(od,doo){
for(i=od;i>=doo;i--){
  console.log(i);
}
};
function losowanie(){
return Math.floor(Math.random()*100+1);
};
x= losowanie();
y= losowanie();
if (x>y){
  wyswietl(x,y);
}else if(y>x){
  wyswietl(y,x);
}
else
  alert('Chuj ci w dupę');
