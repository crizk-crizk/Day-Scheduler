$(document).ready(function () {
  var dayMonth = moment().format("dddd, MMMM, Do");
  $("#currentDay").text(dayMonth);
  // call function to populate fields if theres anything in local storage
  repopulateFields();
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

//onclick for butttons
saveButtonElements.on("click", (event) => {
  //separate buttons' listening power
  var targetButton = event.target;
  //get id of targetButton
  var targetId = targetButton.id;
  //split targetId so only the number can be used
  var targetNumber = targetId.substring(4);
  //local storage value
  var localStorageText = $("#text-" + targetNumber).val();
  //local storage key variable
  var localStorageKey = "text-" + targetNumber;
  //call helper function to save to storage
  savetoLocalStorage(localStorageKey, localStorageText);
});

//Save to local storage
const savetoLocalStorage = (key, value) => {
  if (localStorage.getItem("savedTasks")) {
    //get array from local storage, parse it and store it in a variable.
    let tasks = JSON.parse(localStorage.getItem("savedTasks"));
    tasks[key] = value;
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
    //if there are no saved tasks yet, create tasks array and saved storage
  } else {
    let tasks = { [key]: value };
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
  }
};
//helper function to keep stored items on page even if refreshed.
//browser repopulates the fields
const repopulateFields = () => {
  //if nothing in local storage do nothing
  if (!localStorage.getItem("savedTasks")) {
    return;
    // otherwise (if there is something) use the saved tasks to repopulate the fields
  } else {
    let tasks = JSON.parse(localStorage.getItem("savedTasks"));
    //
    for (let key in tasks) {
      //target id of input field using key to set its value
      $(`#${key}`).val(tasks[key]);
    }
  }
};
