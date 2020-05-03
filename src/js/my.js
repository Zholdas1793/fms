$(document).ready(function(){
    $('.promo__slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    $('.decision__slider').slick({
        infinite: true,
        speed: 800,
        autoplaySpeed: 2000,
        asNavFor: '.decision__slider__nav',
        fade: true,
        prevArrow: '<div class="prevSL"></div>',
        nextArrow: '<div class="nextSL"></div>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                fade: false,
                autoplay: true,
                arrows: false
              }
            }
        ]   
    });

    $('.decision__slider__nav').slick({
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.decision__slider',
        focusOnSelect: true,
    });
});

new WOW().init();


// modal 


$(document).ready(function () {
    $('.btn-form').on('click', function (e) {
        $('.mymodal').fadeIn(500);
        $('body').children('*:not(script, .mymodal)').addClass('blur');
    });

    $('.mymodal__close').on('click', function (e) {
        $('.mymodal').fadeOut(500);
        $('body').children('*:not(script, .mymodal)').removeClass('blur');
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        $('.mymodal').fadeOut(500);
        $('body').children('*:not(script, .mymodal)').removeClass('blur');
    });
    



    // mobail menu
    $('.promo__mobail__btn').on('click', function () {
        $('.promo__mobail__btn').toggleClass('promo__mobail__btn-active');
        $('.promo__mobail__menu').toggleClass('promo__mobail__menu__active')
    });
});



