// const _ = require("passport-local-mongoose");

function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

}

loco();


function mtext() {
  var h1 = document.querySelector(".loader h1");
  var clutter = "";
  var temp = 0;
  for (var i = 0; i <= Math.floor(h1.textContent.length / 2); i++) {
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
    temp++;
  }
  for (var i = Math.floor(h1.textContent.length / 2) - 1; i >= 0; i--) {
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
    temp++;
  }
  document.querySelector(".loader h1").innerHTML = clutter;
  document.querySelectorAll(".loader h1 span").forEach(function (elem) {
    setTimeout(function () {
      gsap.to(elem, {
        delay: 10,
        y: 0,
        ease: Expo.easeInout,
        duration: 0.8,
        delay: elem.dataset.delay * 0.1,
      });
    }, 2000);

    setTimeout(function () {
      gsap.to(elem, {
        delay: 10,
        y: -100,
        ease: Expo.easeInout,
        duration: 0.8,
        delay: elem.dataset.delay * 0.1,
      });
    }, 4000);
  });
}
// mtext();


function topBrands() {
  gsap.to(".scroll_h h1", {
    scrollTrigger: {
      trigger: ".scroll_h h1",
      scroller: "#main",
      start: "top 95%",
      end: "start -50%",
      scrub: 2,
    },
    x: -100,
    stagger: 0.1,
    ease: Expo.easeInout,
    duration: 1,
  });

  gsap.to("#part5-layer", {
    scrollTrigger: {
      trigger: "#part5-layer",
      start: "top 0%",
      end: "top -100%",
      pin: true,
      scrub: 2,
      scroller: "#main",
    },
    scale: 1.4,
    ease: "Expo.easeInOut",
    duration: 4,
  });
  gsap.to("#part6 #part6-layer", {
    scrollTrigger: {
      trigger: "#part6 #part6-layer",
      start: "top 0%",
      end: "top -100%",
      pin: true,
      scrub: 2,
      scroller: "#main",
    },
    scale: 1.4,
    ease: "Expo.easeInOut",
    duration: 4,
  });
}
topBrands();


document.querySelector(".overlay .video_div")
.addEventListener("click",function(){
  var tl = gsap.timeline();
  tl
      .to("#nav",{
        display:"none",
        ease:Expo.easeInout,
      })
    .to(".video_container",{
      display:"flex",
      ease:Expo.easeInout,
    })
    
})

document.querySelector("#close_video")
.addEventListener("click",function(){
  var tl = gsap.timeline();
  tl
    .to(".video_container",{
      display:"none",
      ease:Expo.easeInout,
    })
    .to("#nav",{
      display:"flex",
      ease:Expo.easeInout,
    })
})
