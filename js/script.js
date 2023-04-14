(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

// Set the date we're counting down to
var countDownDate = new Date("Apr 16, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    var html = "<div class='container'>";

    html += days ? "<div class='days block'>"+ days + "<br>Days</div>" : '';
    html += "<div class='hours block'>"+ hours + "<br>Hours</div>";
    html += "<div class='minutes block'>"+ minutes + "<br>Minutes</div>";
    html += "<div class='seconds block'>"+ seconds + "<br>Seconds</div>";

    document.getElementById("time").innerHTML =  html + "</div>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        $('.nameCaption,  #time').hide();
        $('.appendName').append('<h2 id="name"></h2>');
        // document.getElementById("time").innerHTML = "Pratiksha | பிரதிக்க்ஷா";
        Typed.new('#name', {
            strings: ["PRATIKSHA", "பிரதிக்க்ஷா"],
            stringsElement: null,
            // typing speed
            typeSpeed: 100,
            // time before typing starts
            startDelay: 500,
            // backspacing speed
            backSpeed: 50,
            // time before backspacing
            backDelay: 5000,
            // loop
            loop: true,
            // false = infinite
            loopCount: null,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            preStringTyped: (arrayPos, self) => {
                $('#name').css('font-family', arrayPos ? "'Tiro Tamil', serif" : "'Rye', cursive");
            },
         });

    }
}, 1000);

// setTimeout(function(){
//     clearInterval(x)
// }, 1000)