$(document).ready(function () {
  var dayMonth = moment().format("dddd, MMMM, Do");
  $("#currentDay").text(dayMonth);
});


