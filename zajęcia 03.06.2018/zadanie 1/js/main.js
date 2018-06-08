$(document).ready(function () {
//  p1=new prostokat();
//  console.log(p1.podajPole());
//  p2=new prostokat();
//  p2.szerokosc=2;
//  console.log(p2.podajPole());
//  console.log(p1.podajPole());
  a1=new obwod();
  console.log(a1.podajObwod());
});
function prostokat(){
  this.szerokosc=50,
  this.wysokosc=50,
  this.podajPole=function(){
    return this.szerokosc*this.wysokosc;
  }
}function obwod(){
  this.szer=10,
  this.wys=20,
  this.podajObwod=function(){
    return 2*(this.szer)+2*(this.wys);
  }
}
