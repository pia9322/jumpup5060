$(function () {

     // header footer init
     $('header').load('init.html header .header_wrap', init)
     $('footer').load('init.html footer .footer')
     $('.header_background_menu').load('init.html .header_background_menu > ul')



     function init() {
          
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


          // setTimeout(() => {
          //      let mobackImg = $('.header_background_menu');
          //      let mobackList = $('.header_background_menu > ul > li');
     
          //      for(let i=0; i < mobackList.length; i++){
          //           mobackList.eq(i).mouseover(function(){
          //                mobackImg.css({"background":"no-repeat left / cover url(images/info_mv_0"+i+".png)"})
          //           });     
          //      }
          // }, 300);
          

     }
     // header footer init






     console.log('init_On')
});