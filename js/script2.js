(function ($) {
    "use strict";
    jQuery(document).ready(function () {
        /*-------------------------NAVBAR---------------------------- */
        $(window).on('scroll', function () {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        
        
        /*------------------------- STELLAR ---------------------------*/
        $.stellar();
        
        
        /*------------------------- counter ---------------------------*/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        
        /*------------------------- VIDEO POPUP -------------------------*/
        $('.videopopup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%'
                    }
                }
            }
        });
        

        /*---------------------- TESTIMONIAL SLICK CAROUSEL ---------------------*/
        $('.testimonial-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            speed: 400,
            pauseOnHover: false,
            dotsClass: 'testimonial_dots'
        });


        /*-------------------------  BRAND SLICK CAROUSEL -------------------------*/
        $('.brand_carousel').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 5,
            arrows: false,
            autoplay: true,
            speed: 10010,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
        },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
        }
        ]
        });
        
        
        /*-------------------------  SKILL BAR -------------------------*/
        var skillsDiv = $('#skills');
        $(window).on('scroll', function () {
            var winT = $(window).scrollTop(),
                winH = $(window).height(),
                skillsT = skillsDiv.offset().top;
            if (winT + winH > skillsT) {
                $('.skillbar').each(function () {
                    $(this).find('.skillbar-bar').animate({
                        width: $(this).attr('data-percent')
                    }, 6000);
                });
            }
        });   
        
        
    });

    
    
    $(window).on('load', function() {
        /*----------------------------    PRELOADER    -------------------------------- */
        jQuery('.preloader').fadeOut(1000);

    });
    
})(jQuery);