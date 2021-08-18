$(function(){
    // header footer init
    $('header').load('init.html header .header_wrap', init)
    $('footer').load('init.html footer .footer')

    function init() {}
    // header footer init


 
  
    const countUp1 = new CountUp("counting_01", 0, 239, 0 , 3);
    const countUp2 = new CountUp("counting_02", 0, 56.3, 1, 3);
    const countUp3 = new CountUp("counting_03", 0, 239, 0 , 3);
    const countUp4 = new CountUp("counting_04", 0, 80, 0 , 3);
    const countUp5 = new CountUp("counting_05", 0, 56.3, 1 , 3);
    
    console.log($('.countTextBox_01').offset().top);
    
    $(window).scroll(function(){
      let scrollTop = $(window).scrollTop();
      let countTop01 = $('.countTextBox_01').position().top- 400 ;
      let countTop01Pos = $('.countTextBox_01').position().top ;
      let countTop02 = $('.countTextBox_02').position().top - 400 ;

      console.log(scrollTop, countTop01, countTop01Pos);
    //   console.log(countTop01Pos, countTop01);
  
        if (scrollTop >= countTop01) {
            countUp1.start();
            countUp2.start();
        }

        if (scrollTop >= countTop02) {
            countUp3.start();
            countUp4.start();
            countUp5.start();
        }
   
    });
  



});