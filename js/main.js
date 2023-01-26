
$(document).ready(function () {
    $('.all-services').owlCarousel({
        loop: true,
        margin: 0,
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
});
