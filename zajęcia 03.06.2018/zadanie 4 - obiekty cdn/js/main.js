$(document).ready(function () {
  var e = $('#kw');
    for (var i = 1; i < 120; i++) {
      e.clone().insertAfter(e);
    }
    var e = $('#kol');
      for (var i = 1; i < 120; i++) {
        e.clone().insertAfter(e);
      }
      var e = $('#romb');
        for (var i = 1; i < 120; i++) {
          e.clone().insertAfter(e);
        }
//jajko=new prostokat();
//$('body').html(jajko.rysujMnie());
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
function kolo(){
  this.wys=20,
  this.szer=40,
  this.kol='#333333',
  this.rysujMnie2=function(){
    return '<div style="height:'+this.wys+'px;width:'+this.szer+'px;background-color:'+this.kol+';"class="dupcia"></div>';
}
}
