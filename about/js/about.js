$(function () {




  gsap.registerPlugin(ScrollTrigger);
  var startCount = { var: 0 };

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
    var: 55.4, duration: 1.5, ease: "none",
    onUpdate: changeNumber03,
    scrollTrigger: {
      trigger: "#counting_03",
    },
  });
  
  gsap.to(startCount, {
    var: 97, duration: 1.5, ease: "none",
    onUpdate: changeNumber04,
    scrollTrigger: {
      trigger: "#counting_04",
    },
  });
  
  gsap.to(startCount, {
    var: 67, duration: 1.5, ease: "none",
    onUpdate: changeNumber05,
    scrollTrigger: {
      trigger: "#counting_05",
    },
  });

  gsap.to(startCount, {
    var: 154, duration: 1.5, ease: "none",
    onUpdate: changeNumber06,
    scrollTrigger: {
      trigger: "#counting_06",
    },
  });

  gsap.to(startCount, {
    var: 24, duration: 1.5, ease: "none",
    onUpdate: changeNumber07,
    scrollTrigger: {
      trigger: "#counting_07",
    },
  });

  gsap.to(startCount, {
    var: 24, duration: 1.5, ease: "none",
    onUpdate: changeNumber08,
    scrollTrigger: {
      trigger: "#counting_08",
    },
  });

  

  function changeNumber01() {
    counting_01.innerHTML = (startCount.var).toFixed();
  }

  function changeNumber02() {
    counting_02.innerHTML = (startCount.var).toFixed(1);
  }

  function changeNumber03() {
    counting_03.innerHTML = (startCount.var).toFixed(1);
  }

  function changeNumber04() {
    counting_04.innerHTML = (startCount.var).toFixed()+'%';
  }

  function changeNumber05() {
    counting_05.innerText = (startCount.var).toFixed();
  }

  function changeNumber06() {
    counting_06.innerText = (startCount.var).toFixed();
  }

  function changeNumber07() {
    counting_07.innerText = (startCount.var).toFixed();
  }

  function changeNumber08() {
    counting_08.innerText = (startCount.var).toFixed();
  }












  
});