function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveAnimation();

function navAnimation() {
  gsap.to(".nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });

  gsap.to(".nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });

  gsap.to(".nav-part2 .icon", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}
navAnimation();

function videoconAnimation() {
  var videocon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");
  videocon.addEventListener("mouseenter", function () {
    // playbtn.style.opacity = 1
    // playbtn.style.scale = 1
    // or
    gsap.to(playbtn, {
      opacity: 1,
      scale: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    // playbtn.style.opacity = 0
    // playbtn.style.scale = 0
    // or
    gsap.to(playbtn, {
      opacity: 0,
      scale: 0,
    });
  });

  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 60,
      top: dets.y - 70,
    });
  });
}
videoconAnimation();

function loadingAnimation() {
  gsap.from(".page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.2,
  });
  gsap.from(".page1 #video-container", {
    y: 50,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadingAnimation();

// made only for child1

// var child1 = document.querySelector("#child1")
// child1.addEventListener("mouseenter", function(){
//     gsap.to(".cursor",{
//         transform: "translate(-50%,-50%) scale(1)"
//     })
// })
// child1.addEventListener("mouseleave",function(){
//     gsap.to(".cursor",{
//         transform: "translate(-50%,-50%) scale(0)"
//     })
// })

// now made for every child ( child1, child2, child3, child4 )

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  // child cursor animation
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
        backgroundColor: "yellow",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });

  //Anish Animation
  document.querySelectorAll(".page8").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
        backgroundColor: "aquamarine",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });

  // Heading Animation

  document.querySelectorAll(".page1 h1").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
        backgroundColor: "pink",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });

  // Page 2_5 Animation

  document.querySelectorAll(".page2_5").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
        backgroundColor: "red",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
        backgroundColor: "yellow",
      });
    });
  });

  // Page 5 Animation

  document.querySelectorAll(".page5").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
        backgroundColor: "blue",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
        backgroundColor: "yellow",
      });
    });
  });

  // Navbar Animation

  document.querySelectorAll(".nav").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
        backgroundColor: "red",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
        backgroundColor: "yellow",
      });
    });
  });
}
cursorAnimation();
