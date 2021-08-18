$(function(){
    AOS.init()
  
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


    // $('.header_wrap > ul > li, .header_bg').hover(function(){
    //     $(".header_wrap ul ul, .header_bg").stop().slideDown(150)
    // },function(){
    //     $(".header_wrap ul ul, .header_bg").stop().slideUp(150)
    // })




 
  
  const countUp = new CountUp("counting_01", 0, 239, 0 , 2.5);
  const countUp2 = new CountUp("counting_02", 0, 56.3, 1, 2.5);
  const countUp3 = new CountUp("counting_03", 0, 80, 0 , 2.5);
  
  console.log($('.main_wrap_02').offset().top);
  
  $(window).scroll(function(){
    let $scrollTop = $(window).scrollTop();
    let main02Top = $('.main_wrap_02').offset().top -400 ;
    console.log($scrollTop, main02Top);

      if ($scrollTop >= main02Top) {
          countUp.start();
          countUp2.start();
          countUp3.start();
      }

  });



    $(window).scroll(function(){
    
        let executed = false;

        let offsetasd = $('.counter').offset().top - 300;
        if(!executed) {
            if($(window).scrollTop() >= offsetasd){
                let progreeRate = $('.counter').attr('data-rate');

                $({percent:0}).animate({percent:progreeRate},{
                    duration: 1500,
                    progrees: function(){
                        let now = this.percent;
                        $('.counter').text(now);
                    }
                })
                executed = true;
            }
        }
        console.table($('.counter strong'))
    });










}); // end