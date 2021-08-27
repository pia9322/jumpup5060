$(function () {




  gsap.registerPlugin(ScrollTrigger);
  var startCount = { var: 0 };

  gsap.to(startCount, {
    var: 239, duration: 1.5, ease: "none",
    onUpdate: changeNumber01,
    scrollTrigger: {
      trigger: "#counting_01",
    },
  });

  gsap.to(startCount, {
    var: 748, duration: 1.5, ease: "none",
    onUpdate: changeNumber02,
    scrollTrigger: {
      trigger: "#counting_02",
    },
  });

  gsap.to(startCount, {
    var: 239, duration: 1.5, ease: "none",
    onUpdate: changeNumber03,
    scrollTrigger: {
      trigger: "#counting_03",
    },
  });
  
  gsap.to(startCount, {
    var: 80, duration: 1.5, ease: "none",
    onUpdate: changeNumber04,
    scrollTrigger: {
      trigger: "#counting_04",
    },
  });
  
  gsap.to(startCount, {
    var: 56.3, duration: 1.5, ease: "none",
    onUpdate: changeNumber05,
    scrollTrigger: {
      trigger: "#counting_05",
    },
  });

  

  function changeNumber01() {
    counting_01.innerHTML = (startCount.var).toFixed();
  }

  function changeNumber02() {
    counting_02.innerHTML = (startCount.var).toFixed();
  }

  function changeNumber03() {
    counting_03.innerHTML = (startCount.var).toFixed();
  }

  function changeNumber04() {
    counting_04.innerHTML = (startCount.var).toFixed()+'%';
  }

  function changeNumber05() {
    counting_05.innerText = (startCount.var).toFixed(1);
  }












  
});