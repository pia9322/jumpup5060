$(function(){


    function NavScroll() {
        if ($('.header_background_menu').hasClass('active')) {
            $('body').css({ 'overflow': 'hidden' });
        } else {
            $('body').css({ 'overflow': 'auto' });
        };
    }



    function Navopen() {
        $('.header_right').on('click', function () {
            $('.header_background_menu').toggleClass('active');
            $('header').toggleClass('active');
            $('.header_right').toggleClass('active');

            if ($('.header_background_menu').hasClass('active')) {
                $('.header_background_menu').css({ "cursor": "alias" });
            }
            NavScroll();

        });

    }
    Navopen()


    function mNav() {
        let moNavBack = document.querySelector('.header_background_menu');

        moNavBack.addEventListener('click', function (e) {

            if (e.target.nodeName != 'A') {
                $('.header_background_menu').removeClass('active')
                $('header').removeClass('active');
                $('.header_right').removeClass('active');

            }
            NavScroll();

        });

    }
    mNav();
    

}); // end