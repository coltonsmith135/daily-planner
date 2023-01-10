var saveBtn = $('.saveBtn');
var description = $('.description')









$(document).ready(function () {

  saveBtn.on("click", function (event) {
    event.preventDefault();
    console.log('button clicked')

    let input = $(this).siblings('textarea').val()
    let textArea = $(this).siblings('textarea').attr('id')


    console.log(textArea)
    console.log(input)
    localStorage.setItem(textArea, input)

    for (let i = 0; i < 8; i++) {
      var info = localStorage.getItem(textArea)
    }
    console.log(info)
    description.innerHTML = info


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

  for (let i = 0; i < 8; i++) {
    var info = localStorage.getItem(textArea)
  }
  console.log(info)
  description.innerHTML = info


  var today = dayjs();
  $('#currentDay').text(today.format(`dddd, MMMM D, H:mma`));

});

