
$(document).ready(function () {
  function second_passed() {
    $('.clock').removeClass('is-off');
  }
  setTimeout(second_passed, 2000)

  $('.switcher').on('click', function(e) {
    e.preventDefault();
    $('.screen').toggleClass('glitch');
  });

  // function updateCountdown() {
  //   const now = new Date();
  //   const endOfDay = new Date(now);
  //   endOfDay.setHours(23, 59, 59, 999); // Set the end of the day to 23:59:59.999

  //   const timeRemaining = endOfDay - now;
  //   const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  //   const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  //   const seconds = Math.floor((timeRemaining / 1000) % 60);
  //   const milliseconds = timeRemaining % 1000;
    
  //   //const fhours = hours.toString().padStart(3, '0');
  //   //const fminutes = minutes.toString().padStart(3, '0');
  //  //const fseconds = seconds.toString().padStart(3, '0');
  //   const fmilliseconds  = milliseconds .toString().padStart(3, '0');

  //   //var realTime = (hours < 10 ? '0' : '') + hours + ' : ' + (minutes < 10 ? '0' : '') + minutes + ' : ' + (seconds < 10 ? '0' : '') + seconds;
  //   var realTime = hours + ' : ' + minutes + ' : ' + seconds + ' : ' + fmilliseconds;

  //   $('.time').html(realTime);
  //   $('.time').attr('data-time', realTime);
  // }

  // setInterval(updateCountdown, 20);

  var worker = new Worker('worker.js');

  //debug
console.log("Worker called");

// Listen for messages from the web worker
  worker.addEventListener('message', function(e) {
    var realTime = e.data;
    $('.time').html(realTime);
    $('.time').attr('data-time', realTime);
  });

});

document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "One day OR Day one",
        "Time Won't stop for any one",
        "Lost time is never found again.",
        "The most precious resource we all have is time",
        "Time is money",
        "Yesterday is history, Tomorrow is a mystery, but Today is a gift. That is why it is called the present",
        "The future starts today, not tomorrow",
        "Time waits for no one.",
        "Your time is limited, so don’t waste it living someone else’s life.",
        "The way we spend our time defines who we are.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Time flies over us, but leaves its shadow behind.",
        "The key is in not spending time, but in investing it.",
        "Better three hours too soon than a minute too late.",
        "It’s not that we have little time, but more that we waste a good deal of it.",
        "Do something today that your future self will thank you for."
    ];


    // Function to display a random quote
    function displayRandomQuote() {
        const textDiv = document.getElementById("text");
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        textDiv.textContent = randomQuote;
    }

    // Call the function to display a random quote when the page loads
    displayRandomQuote();
});

