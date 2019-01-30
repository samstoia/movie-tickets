//Business Logic for Ticket
function Ticket(movie, time, age)  {
  this.movie = movie,
  this.time = time,
  this.age = age
}

Ticket.prototype.priceShow = function (ticketPrice) {
  if (ticketPrice.movie + ticketPrice.time + ticketPrice.age < 4 ) {
    $("#priceOne").show();
    $("#priceTwo").hide();
    $("#priceThree").hide();
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');

  }
  else if (ticketPrice.movie + ticketPrice.time + ticketPrice.age === 4) {
  $("#priceTwo").show();
  $("#priceOne").hide();
  $("#priceThree").hide();
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');

  }
  else if (ticketPrice.movie + ticketPrice.time + ticketPrice.age > 4) {
  $("#priceThree").show();
  $("#priceOne").hide();
  $("#priceTwo").hide();
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');

  }
}
//Front-End
var ticket = new Ticket();

$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    var userMovie = parseInt($("input:radio[name=movie]:checked").val());
    var userTime = parseInt($("input:radio[name=showTime]:checked").val());
    var userAge = parseInt($("input:radio[name=age]:checked").val());
    var ticketPrice = new Ticket(userMovie, userTime, userAge);
    console.log(ticketPrice)
    ticket.priceShow(ticketPrice);
    $('input[type="radio"]').prop('checked', false); 
  });
});
