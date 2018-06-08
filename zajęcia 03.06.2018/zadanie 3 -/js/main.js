$(document).ready(function () {
jajko=new prostokat();
console.log(jajko.przypadek());
$('body').html(jajko.rysujMnie());
jajko2= new prostokat();
jajko2.wys=40;
jajko.szer=10;
jajko2.kol='#F00';
$('body').append(jajko2.rysujMnie());
});
function prostokat(){
  this.wys=20,
  this.szer=40,
  this.kol='#333333',
  this.rysujMnie=function(){
    return '<div style="height:'+this.wys+'px;width:'+this.szer+'px;background-color:'+this.kol+';"class="dupcia"></div>';
  },
  this.przypadek=function(){
      return Math.floor(Math.random()*100+1);
    },
    this.losowe=function(){
      this.wys=this.przypadek();
      this.szer=this.przypadek();

    },this.losowe()
}
