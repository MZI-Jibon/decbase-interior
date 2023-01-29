
$(document).ready(function () {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
          $("nav").css({"background" : "#ffffffe5", "box-shadow" : "0 0 7px #777", "transition": ".3s"});
        }
  
        else{
            $("nav").css({"background" : "#00000000", "box-shadow" : "none"});  	
        }
    })

    $('.all-services').owlCarousel({
        loop: true,
        margin: -10,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })

    $('.all-testimonials').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            }
        }
    })
});
