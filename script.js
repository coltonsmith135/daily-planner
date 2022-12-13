// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hour = $('#hour-x');
var saveBtn = $('saveBtn');

var timeBlock = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]








$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.addEventListener("click", function(event){
  event.preventDefault();
  var input = {

  }

  localStorage.setItem('user', JSON.stringify(input));
  })
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    if (timeBlock < today) {
      hour.attr('class', 'past');
    } 

    if (timeBlock === today) {
      hour.attr('class', 'present');
    }

    if (timeBlock > today) {
      hour.attr('class', 'future');
    }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?                                 
  
  // This displays the current date on the top of my webpage using the id "currentDate"
  var today = dayjs();
  $('#currentDay').text(today.format(`dddd, MMMM D, H:mma`));
  console.log(today);
});