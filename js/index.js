$(function(){
    AOS.init()
    // $('.header_wrap > ul > li, .header_bg').hover(function(){
    //     $(".header_wrap ul ul, .header_bg").stop().slideDown(150)
    // },function(){
    //     $(".header_wrap ul ul, .header_bg").stop().slideUp(150)
    // })
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
            768 : {
              slidesPerView : 1.5,
            },
        },
    });



    // var cnt0 = 0;

    // counterFn(".number_01",256);
    // counterFn(".number_02",56.3);
    // counterFn(".number_03",80);

    // function counterFn(targer,number) {
    //     let id0 = setInterval(count0Fn, 30);
        
    //     function count0Fn() {
    //     cnt0++;
    //         if (cnt0 > number) {
    //             clearInterval(id0);
    //         } else {
    //             $(targer).text(cnt0);
    //         }
    //     }
    // }





});