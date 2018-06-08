$(document).ready(function () {

});
function showGumisie(){
  var ramka = $('#sramka1');
  ramka.html('');
var gumisie = $('#dupa1').val();
  for(var i = 1; i <= gumisie; i++){
    var gumisKlasa = "gumis"+i;
    console.log(gumisKlasa);
    var gum = '<div class="'+gumisKlasa+'"></div>';
    console.log(gum);
    ramka.append(gum);
  }


}
