
// Init Scrollspy
$('body').scrollspy({ target: '#main-nav' });

// Smooth scrolling
$('#main-nav a').on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            window.location.hash = hash;
        });
    }
});

/*========== Special CAROUSEL ==========*/
$(document).ready(function () {

    

    $('#special-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        autoplayTimeout: 6000,
        smartSpeed: 1200,
        dotsSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // for Clients
    $('#clients-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        autoplayTimeout: 6000,
        smartSpeed: 1200,
        dotsSpeed: 1000,
        responsive: {

            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
});