// HAMBURGER TOGGLER
gsap.fromTo(".main-hero-animation", {
  y: 400,
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  duration: 3,
  ease: "power4.out"
});
gsap.fromTo(".hero-para-animation", {
  y: 500,
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  duration: 3,
  ease: "power4.out"
});
gsap.fromTo(".hero-btn-animation", {
  y: 100,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  delay: 1,
  duration: 2,
  ease: "power4.out"
});
$(".hamburger-menu").on("click", function () {
  $(".hamburger-menu").toggleClass("animate");
  $("#overlay").toggleClass("overlay-active");
  $("body").toggleClass("mobile-view");
  $("body").toggleClass("fix-screen-mobile");
  $(".hero-background").toggleClass("overflow-initial");
});
$(document).ready(function () {
  const Section1 = document.querySelector("#name1-section");
  const Section2 = document.querySelector("#name2-section");
  const Section3 = document.querySelector("#name3-section");
  const Section4 = document.querySelector("#name4-section");
  const Section5 = document.querySelector("#name5-section");
  const Section6 = document.querySelector("#name6-section");
  // const mainMenu = document.querySelector(" #main-menu ");

  //  SECTION-1 SCROLL
  $(".section-1").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $("body").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section1.scrollIntoView();
  });

  // SECTION-2 SCROLL
  $(".section-2").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $("body").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section2.scrollIntoView();
  });

  // SECTION-3 SCROLL
  $(".section-3").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $("body").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section3.scrollIntoView();
  });

  // SECTION-4 SCROLL
  $(".section-4").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $("body").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section4.scrollIntoView();
  });

  // SECTION-5 SCROLL
  $(".section-5").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $("body").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section5.scrollIntoView();
  });

  // SECTION-6 SCROLL
  $(".section-6").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $("body").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section6.scrollIntoView();
  });
});

//================ LOCOMOTIVE SCROLL ANIMATION JS
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  lerp: 0.15,
  getSpeed: true,
  class: "hello",
  direction: "horizontal",
  mobile: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
});

locoScroll.on("scroll", ScrollTrigger.update);
//=================== ADD SCROLLPROXY IN PAGE
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ?
      locoScroll.scrollTo(value, 0, 0) :
      locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.

  getBoundingClientRect(e) {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ?
    "transform" : "fixed",
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
const routeHandler = (value) => {
  const target = document.querySelector("#" + value);
  locoScroll.scrollTo(target);
};

// CENTER MODE SLICK SLIDER
$(".center").slick({
  dots: false,
  centerMode: false,
  infinite: true,

  speed: 400,
  slidesToShow: 2,
  prevArrow: ".prev",
  nextArrow: ".next",
  asNavFor: ".character-box",
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
$(".character-box").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: ".center",
  dots: false,
  fade: true,
  arrows: false,
});
$(".mobile-slider").slick({
  dots: false,
  centerMode: false,
  infinite: true,
  speed: 400,
  asNavFor: ".character-box",
  slidesToShow: 2,
  prevArrow: ".prev-mobile",
  nextArrow: ".next-mobile",
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

//===================== GSAP ANIMATIONS

const tl = gsap.timeline().from(".main-hero-animation", {
  x: 50,
  opacity: 0,
  ease: "linear",
});

ScrollTrigger.create({

  animation: tl,

  start: "top bottom",
  end: "bottom top",
  scrub: true,
});

//================= GALLERY SECTION GSAP ANIMATIONS

ScrollTrigger.create({
  trigger: ".gallery-section-wrapper",
  animation: gsap.timeline().fromTo(
    ".swiper-wrapper", {
      x: -1000,
    }, {
      x: 0,
      ease: "linear",
    }
  ),
  scroller: ".smooth-scroll",
  start: "top bottom",
  end: "bottom top",
  scrub: true,
});
// swiper - wrapper - middle;
ScrollTrigger.create({
  trigger: ".gallery-section-wrapper",
  animation: gsap.timeline().fromTo(
    ".swiper-wrapper-middle", {
      x: 0,
    }, {
      x: -900,
      ease: "linear",
    }
  ),
  scroller: ".smooth-scroll",
  start: "top bottom",
  end: "bottom top",
  scrub: true,
});
// "swiper-wrapper-end"

ScrollTrigger.create({
  trigger: ".gallery-section-wrapper",
  animation: gsap.timeline().fromTo(
    ".swiper-wrapper-end", {
      x: -1200,
    }, {
      x: 0,
      ease: "linear",
    }
  ),
  scroller: ".smooth-scroll",
  start: "top bottom",
  end: "bottom top",
  scrub: true,
});

// manga - pages
const t3 = gsap
  .timeline()
  .fromTo(
    ".manga-img-first", {
      x: 60,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      ease: "power4.inOut",
    }
  )
  .fromTo(
    ".manga-img-second", {
      x: 60,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      ease: "power4.inOut",
    }
  )
  .fromTo(
    ".manga-img-third", {
      x: 60,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,

      ease: "power4.inOut",
    }
  )
  .fromTo(
    ".manga-img-fourth", {
      x: 60,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      ease: "power4.inOut",
    }
  );

ScrollTrigger.create({
  trigger: ".page-section-gspa-animation",
  // pin: true,
  animation: t3,
  scroller: ".smooth-scroll",
  start: "70% 80%",
  end: "top 30%",
  scrub: true,
});

//============================ ROADMAP PHESE ACTIVE
ScrollTrigger.create({
  trigger: ".phase-1",
  // pin: true,
  animation: gsap.timeline().fromTo(
    ".inner-circle-1", {
      scale: 0,
    }, {
      scale: 1,
      ease: "linear",
    }
  ),

  scroller: ".smooth-scroll",
  start: "top 60%",
  end: "top 40%",

  scrub: true,
});

ScrollTrigger.create({
  trigger: ".phase-2",
  // pin: true,
  animation: gsap.timeline().fromTo(
    ".inner-circle-2", {
      scale: 0,
    }, {
      scale: 1,
      ease: "linear",
    }
  ),

  scroller: ".smooth-scroll",
  start: "top 60%",
  end: "top 40%",

  scrub: true,
});
ScrollTrigger.create({
  trigger: ".phase-3",
  // pin: true,
  animation: gsap.timeline().fromTo(
    ".inner-circle-3", {
      scale: 0,
    }, {
      scale: 1,
      ease: "linear",
    }
  ),

  scroller: ".smooth-scroll",
  start: "top 60%",
  end: "top 40%",

  scrub: true,
});
ScrollTrigger.create({
  trigger: ".phase-4",
  // pin: true,
  animation: gsap.timeline().fromTo(
    ".inner-circle-4", {
      scale: 0,
    }, {
      scale: 1,
      ease: "linear",
    }
  ),

  scroller: ".smooth-scroll",
  start: "top 60%",
  end: "top 40%",
  scrub: true,
});

let target;

locoScroll.on("scroll", (args) => {
  // Get all current elements : args.currentElements

  // ouput log example: 0.34
  // gsap example : myGsapAnimation.progress(progress);
  // const smoothscrollparent = document.querySelector(".smooth-scroll");

  const pageYOffsetValue = args && args.scroll && args.scroll.y;
  // console.log(pageYOffsetValue, "args")
  // console.log(args, "args")

  // if (pageYOffsetValue < 1080) {
  //   target = document.querySelector("#about");
  // }
  // if (pageYOffsetValue >= 1079 && pageYOffsetValue < 2208) {
  //   target = document.querySelector("#page-section-element");
  // }
  // if (pageYOffsetValue >= 2208 && pageYOffsetValue < 3240) {
  //   target = document.querySelector("#charactor");
  // }
  // if (pageYOffsetValue >= 3240 && pageYOffsetValue < 4320) {
  //   target = document.querySelector("#gallery");
  // }
  // if (pageYOffsetValue >= 4320 && pageYOffsetValue < 6702) {
  //   target = document.querySelector("#how-it-works");
  // }
  // if (pageYOffsetValue >= 6702 && pageYOffsetValue < 8022) {
  //   target = document.querySelector("#roadmap");
  // }
  // if (pageYOffsetValue >= 8022 && pageYOffsetValue < 10006) {
  //   target = document.querySelector("#team");
  // }
  // if (pageYOffsetValue >= 10006 && pageYOffsetValue < 11536) {
  //   target = document.querySelector("#faq");
  // }

  if (pageYOffsetValue == 0) {
    target = document.querySelector("#footer");
    document.querySelector(".scrollUpDown").style.transform = "rotate(0deg)";
  }
  if (args.scroll.y == args.limit) {
    target = document.querySelector("#hero");
    document.querySelector(".scrollUpDown").style.transform = "rotate(180deg)";
  }
});

const scrollUpDownHandler = () => {
  console.log(target);
  locoScroll.scrollTo(target);
};

const tween = gsap.fromTo(
  ".team-cards", {
    opacity: 0,
    y: 100,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
  }
);

ScrollTrigger.create({
  trigger: ".team-cards",
  // pin: true,
  animation: gsap.timeline().fromTo(
    ".team-cards", {
      scale: 0,
    }, {
      scale: 1,
      ease: "linear",
      stagger: 0.3,
    }
  ),

  scroller: ".smooth-scroll",
  start: "top 70%",
  end: "top 20%",
  scrub: true,
});