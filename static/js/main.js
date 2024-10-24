
$(window).on('load', function() {
   "use strict";
    $('.status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');


    var end_date = +new Date("Nov 09, 2024 16:30:00 GMT+03:00");
		var date_now = new Date();
		var seconds = Math.floor((end_date - (date_now))/1000);

    $('.countdown').final_countdown({
            'start': null,
            'end': seconds,
            'now': null        
        });
});

$(document).ready(function() {
   "use strict";

    var content = $("body"),
      navbar = $(".navbar"),
      col = $(".col-transform");

    $(".show-info").on('click', function() {
      if (window.innerWidth > 990) {
        if (content.hasClass('show-content')) {
          content.removeClass('show-content');
            navbar.removeClass('navbar-open');
        } else {
          content.addClass('show-content');
            navbar.addClass('navbar-open');
        }
      }
    });


});