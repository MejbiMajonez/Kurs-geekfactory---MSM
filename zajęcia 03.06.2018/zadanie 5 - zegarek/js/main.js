$(document).ready(function(){
czas();
});
var days = Array ('Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota');
var months = Array ('Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień',
'Październik','Listopad','Grudzień');
function czas(){
var date = new Date;
var year = date.getFullYear();
var month = date.getMonth();
d = date.getDate();
day = date.getDay();
if (d<10)
{
  d="0" + d;
}
h = date.getHours();
if (h<10)
{
  h="0" + h;
}
m = date.getMinutes();
if (m<10)
{
  m="0" + m;
}
s = date.getSeconds();
if (s<10)
{
  s="0" + s;
}
$('.t1').html(days[day]+' '+h+':'+m+':'+s);
$('.t2').html(d+' '+months[month]+' '+year);
setTimeout(function(){czas();},1000);
}
