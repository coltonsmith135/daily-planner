var saveBtn = $('.saveBtn');
var description = $('.description')

$(document).ready(function () {

  saveBtn.on("click", function (event) {
    event.preventDefault();
    console.log('button clicked')

    // the value was selected by using the siblings method to find the sibling of the button being used to be able to get the value of the textarea

    let input = $(this).siblings('textarea').val()

    // assigned the id as textarea to be able to store it in local storage as a keyitem
    let textArea = $(this).siblings('textarea').attr('id')

    // passed textarea as a key item and input as the value
    localStorage.setItem(textArea, input)



  });

  // this does a for each loop to compare the time selected by the id and compares it to the current time to determine whether it is in the past, present, or future.

  let currentHour = moment().hour()
  $('.description').each(function () {

    // this lets us turn the id into a string to be able to compare integers to integers instead of string to integer

    let timeHour = parseInt($(this).attr('id'))

    if (timeHour < currentHour) {
      $(this).addClass('past')
    }

    if (timeHour === currentHour) {
      $(this).addClass('present')
    }

    if (timeHour > currentHour) {
      $(this).addClass('future')
    }
  })

// this function loops through the local storage and gets the data and places it in the matching text area

  function init() {

    // selects the class description and does a for each to loop through each text area

    $('.description').each(function () {

      // this selects the values stored in the local stoage assigned to each id. 

      $(this).val(localStorage.getItem(this.id))
   })
  }
// this gets the current day and time

  var today = dayjs();
  $('#currentDay').text(today.format(`dddd, MMMM D, H:mma`));
  init();
});

