$(document).ready(function () {
$("#from").datepicker({
  numberOfMonths:3,
  onClose:function(selectedDate){
    $("#to").datepicker("option","minDate",selectedDate);
  }
});
$("#to").datepicker({
  defaultDate:"+1w",
  onClose:function(selectedDate){
    $("#from").datepicker("option","maxDate",selectedDate);
  }
})
});
