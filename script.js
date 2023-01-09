var saveBtn = $('saveBtn');









$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.on("click", function (event) {
    event.preventDefault();
    $('.description').each(function () {
      let input = $(this).attr('id').val

      localStorage.setItem('value', input)
    })
  });

  let currentHour = moment().hour()

  $('.description').each(function () {

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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?                                 


  var today = dayjs();
  $('#currentDay').text(today.format(`dddd, MMMM D, H:mma`));

})
  ;
