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

//****** Event listener for buttons ******
var saveButtonElements = $(".saveBtn");
var textInputElements = $("textarea");

for (var j = 0; j < saveButtonElements.length; j++) {
  //onclick for butttons
  $(saveButtonElements[j]).on("click", (event) => {
    //separate buttons' listening power
    var targetButton = $(event.target);
    //get id of targetButton
    var targetId = targetButton.attr("id");
    //split targetId so only the number can be used
    var targetNumber = targetId.substring(4);
    //display text of tarted textarea using targetNumber
    console.log($("#text-" + targetNumber).val());
  });
};


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
