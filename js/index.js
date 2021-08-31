$(function(){

  
    var swiper = new Swiper('.swiper_01', {
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                $('.swiper-progress-bar').removeClass('animate');
                $('.swiper-progress-bar').removeClass('active');
                $('.swiper-progress-bar').eq(0).addClass('animate');
                $('.swiper-progress-bar').eq(0).addClass('active');
            },
            slideChangeTransitionStart: function () {
                $('.swiper-progress-bar').removeClass('animate');
                $('.swiper-progress-bar').removeClass('active');
                $('.swiper-progress-bar').eq(0).addClass('active');
            },
            slideChangeTransitionEnd: function () {
                $('.swiper-progress-bar').eq(0).addClass('animate');
            },
        }
    });

    var swiper = new Swiper(".swiper_02", {
        slidesPerView: 3.5,
        spaceBetween: 20,
        loop : true,
        loopAdditionalSlides : 10,
        // centeredSlides: true,
        // navigation: {   // 버튼 사용자 지정
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        breakpoints : { // 반응형 설정이 가능 width값으로 조정
            2560 : {
                slidesPerView : 4,
              },
            1920 : {
                slidesPerView : 3.5,
            },
            1800 : {
                slidesPerView : 2.5,
              },
            1440 : {
            slidesPerView : 1.5,
            },
            1024 : {
              slidesPerView : 1.1,
            },
            767 : {
              slidesPerView : 1.1,
            },
            486 : {
              slidesPerView : 1,
            },
        },
    });


    gsap.registerPlugin(ScrollTrigger);
    var startCount = {var: 0};

    gsap.to(startCount, {
        var: 67, duration: 1.5, ease: "none",
        onUpdate: changeNumber01,
        scrollTrigger: {
            trigger: "#counting_01",
        },
    });

    gsap.to(startCount, {
        var: 55.4, duration: 1.5, ease: "none",
        onUpdate: changeNumber02,
        scrollTrigger: {
            trigger: "#counting_02",
        },
    });

    gsap.to(startCount, {
        var: 97, duration: 1.5, ease: "none",
        onUpdate: changeNumber03,
        scrollTrigger: {
            trigger: "#counting_03",
        },
    });


    function changeNumber01() {
        counting_01.innerHTML = (startCount.var).toFixed();
    }

    function changeNumber02() {
        counting_02.innerHTML = (startCount.var).toFixed(1);
    }

    function changeNumber03() {
        counting_03.innerHTML = (startCount.var).toFixed();
    }

    






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
            }
            NavScroll();

        });

    }
    mNav();




}); // end