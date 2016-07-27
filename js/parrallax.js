// JavaScript source code
$(document).ready(function () {
    //cache the window object
    $window = $(window);

    $('section[data-type="background"]').each(function () {
        //declare the variable to affect the defined data-type
        var $scroll = $(this)

        $(window).scroll(function () {

            //move the navbar
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }

            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            //background position 
            var coords = '80% ' + yPos + 'px';

            //move the background
            $scroll.css({ backgroundPosition: coords });
        }); // end window scroll 
    }); // end section function 
}); // end script