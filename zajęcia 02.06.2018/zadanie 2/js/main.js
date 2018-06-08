$(document).ready(function () {
var imiona = [
  "Paulina","Weronika","Artur","Patrycja","Monika","Przemysław","Mateusz","Anna","Edyta","Małgorzata"
];
$("#firstname").autocomplete({
  source:imiona
});
});
