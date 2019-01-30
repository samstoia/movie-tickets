//Business Logic for Ticket
function Ticket(basePrice, time, age)  {
  this.price = basePrice,
  this.time = time,
  this.age = age
}

Ticket.prototype.ticketPrice = function(time, age) {
  this.price = 5 + time + age;
  console.log(Ticket.ticketPrice());
}

//Front-End
function showPrice(movie1Price) {
  $("#show-price").show();

$(document).ready(function() {
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    var movie1Time = parseInt($("#movie1-time").val());
    var movie1Age = parseInt($("movie1-age").val());
    // var movie2Time = parseInt($("#movie2-time").val());
    // var movie2Age = parseInt($("movie2-age").val());
    // var movie3Time = parseInt($("#movie3-time").val());
    // var movie3Age = parseInt($("movie3-age").val());
    var basePrice = 5
    var movie1Price = new Ticket(basePrice, movie1Time, movie1Age)
    // var movie2Price = new Ticket(basePrice, movie2Time, movie2Age)
    // var movie3Price = new Ticket(basePrice, movie3Time, movie3Age)
  });
});
