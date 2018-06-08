$(document).ready(function () {
$("#datepicker").datepicker({
  changeMonth:true,
  changeYear:true,
  dateFormat:'d M y',
  minDate:0,
  maxDate:"+1M+10D"
});
});
