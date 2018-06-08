$(document).ready(function () {
  ob1=new figure();
    for (i=1; i<120; i++){
  $('body').append(ob1.rysuj());
}
});
function figure(){
this.type="",
this.color="000",
this.losuj=function(x){
  return Math.floor(Math.random()*(x+1));
},
this.zamien_na_hex=function(liczba){
  switch(liczba){
    case 10:liczba='A';break;
    case 11:liczba='B';break;
    case 12:liczba='C';break;
    case 13:liczba='D';break;
    case 14:liczba='E';break;
    case 15:liczba='F';break;
  }
  return liczba;
}
this.rysuj=function(){
  switch(this.losuj(2)){
    case 1:this.type='romb';break;
    case 2:this.type='kolo';break;
  }
  this.color=this.zamien_na_hex(this.losuj(15))+''+this.zamien_na_hex(this.losuj(15))+''+this.zamien_na_hex(this.losuj(15));
  return '<div class="box '+this.type+'"style="background:#'+this.color+';"></div>';
}

}
