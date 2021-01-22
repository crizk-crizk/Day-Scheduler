$(document).ready(function () {
  var dayMonth = moment().format("dddd, MMMM, Do");
  $("#currentDay").text(dayMonth);
});

for (var i = 9; i <= 17; i++) {
  // check the currenthour
  var currentHour = moment().format("H");
  //   console.log(currentHour);

  var targetSpan = $($("#" + i).children()[1]);

  // based from the current hour, change the colors of the textareas
  if (currentHour > i) {
    targetSpan.addClass("past");
  } else if (currentHour == i) {
    targetSpan.addClass("present");
  } else {
    targetSpan.addClass("future");
  }
}

var saveButtonElements = $(".saveBtn");
var textInputElements = $("textarea");

// var textInputElements = $(`#saveBtn-${saveButtonElements}`).val();

// // add a click function for each of the save buttons
// // want to target the corresponding textarea

// // first save button
// $(saveButtonElements[0]).on("click", function () {
//   // textarea that has id "text-9"
//   console.log($("#text-9").val());
// });

// // second save button
// $(saveButtonElements[1]).on("click", function () {
//   // textarea that has id "text-10"
//   console.log($("#text-10").val());
// });
