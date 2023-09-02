function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
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
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
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
  
  function pg1() {
    var tl = gsap.timeline();
    tl
      // .to('.star img',{
      //         delay:1,
      //         y:0,
      //         ease:Expo.easeInout,
  
      // })
      // .to("#star1",{
      //         delay:1,
      //         x:-115,
      //         rotate:"-360deg",
      //         ease:Expo.easeInout,
      //         duration:1
      //   })
      //   .to("#star2",{
      //         delay:-1,
      //         x:115,
      //         rotate:"360deg",
      //         ease:Expo.easeInout,
      //         duration:1
      //   })
  
      //      .to("#star1",{
      //         // delay:1,
      //         y:-150,
      //         rotate:"-360deg",
      //         ease:Expo.easeInout,
      //         duration:1
      //   })
      //   .to("#star2",{
      //         delay:-1,
      //         y:-150,
      //         rotate:"360deg",
      //         ease:Expo.easeInout,
      //         duration:1
      //   })
  
      //      .to('.loader',{
      //          height:"0vh",
      //          ease:Expo.easeInout,
      //          duration:1
      //      })
  
      .from(".pg1", {
        delay: -1,
        rotateX: "80deg",
        scale: 0,
        rotateY: "80deg",
        duration: 2,
        ease: Expo.easeInout,
      })
      .to(".pg1", {
        delay: -3,
        width: "100%",
        height: "100vh",
        ease: Expo.easeInout,
        backgroundColor: "yelow",
        duration: 1,
      })
      .to("#nav .menu_icon, .brand_name,.button,#nav .search,#nav .prfimg, .right_nav h6", {
        y: 0,
        ease: Expo.easeInout,
        duration: 1,
      })
      .to(".overlay .video_div", {
        opacity: 1,
        ease: Expo.easeInout,
        duration: 1,
      })
      .to("#main", {
        opacity: 1,
        ease: Expo.easeInout,
        duration: 1,
      });
  }
  
  pg1();
  
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
  
  
  function nav() {
    var flag = 0;
  
    document
        .querySelector("#nav .menu_circle")
        .addEventListener("click", function () {
            if (flag === 0) {
                document.querySelector("#line1").style.display = "none";
                document.querySelector("#line2").style.display = "none";
                document.querySelector("#navclose").style.display = "initial";
                document.querySelector(".right_nav h6").style.color = "#000";
                var tl = gsap.timeline();
                tl.to("#nav_loader", {
                    height: "100vh",
                })
                    .to(" #nav_loader #images img", {
                        delay: -0.5,
                        width: "68vh",
                        ease: Expo.easeInout,
                        duration: 1,
                    })
                    .to("#nav_loader #links .container h1", {
                        delay: -1,
                        y: 0,
                        ease: Expo.easeInout,
                        duration: 1,
                    })
                    .to("#nav",{
                        backgroundColor: "#e6dcdc",
                        borderBottom: "2px solid #cec3c3",
                        delay:-1
                    })
                    .to("#nav .search",{
                        border: "1px solid #000",
                        delay:-1
                    })
                    .to("#nav .search i",{
                        color:"#000",
                        delay:-1
                    })
                    .to("#nav .menu_circle",{
                        border: "1px solid #000",
                        delay:-1
                    })
                    .to("#nav .menu_circle .line",{
                        backgroundColor:"#000",
                        delay:-1
                    })
                    .to(" .menu_icon h6",{
                        color:"#000",
                        delay:-1
                    })
                    .to("#nav_loader #links .profile",{
                        opacity:1,
                        ease:Expo.easeInout,
                    })
                   
                flag = 1;
  
            } else {
                
                flag = 0;
                var tl = gsap.timeline();
                tl.to(" #nav_loader #images img", {
                    delay: -0.5,
                    width: "0vh",
                    ease: Expo.easeInout,
                    duration: 1,
                })
                    .to("#nav_loader #links .container h1", {
                        // delay: -1,
                        y: 100,
                        ease: Expo.easeInout,
                        duration: 1,
                    })
                    .to("#nav_loader #links .profile",{
                        opacity:0,
                        ease:Expo.easeInout,
                        delay:-1,
                    })
                 
                    .to("#nav_loader", {
                        height: "0vh",
                    })
                    .to("#nav_loader #links .container h1", {
                        // delay: -1,
                        y: -100,
                        ease: Expo.easeInout,
                        duration: 1,
                    })
                    .to("#nav",{
                        backgroundColor: "transparent",
                        borderBottom: "none",
                        delay:-1.5
                    })
                    .to("#nav .search",{
                        border: "1px solid #fff",
                        delay:-1
                    })
                    .to("#nav .search i",{
                        color:"#fff",
                        delay:-1
                    })
                    .to("#nav .menu_circle",{
                        border: "1px solid #fff",
                        delay:-1
                    })
                    .to("#nav .menu_circle .line",{
                        backgroundColor:"#fff",
                        delay:-1
                    })
                    .to(" .menu_icon h6",{
                        color:"#fff",
                        delay:-1
                    })
                    
                    function navi(){
                        document.querySelector("#navclose").style.display = "none";
                        document.querySelector("#line1").style.display = "initial";
                        document.querySelector("#line2").style.display = "initial";
                        document.querySelector(".right_nav h6").style.color = "#fff";
                    }
                    setTimeout(navi, 1800);
  
                   
                   
            }
        });
  
    document.querySelector("#one").addEventListener("mouseenter", function () {
        document.querySelector("#im1").style.opacity = 1;
        document.querySelector("#im2").style.opacity = 0;
        document.querySelector("#im3").style.opacity = 0;
        document.querySelector("#im4").style.opacity = 0;
        document.querySelector("#im5").style.opacity = 0;
        document.querySelector("#im").style.opacity = 0;
    });
    document.querySelector("#one").addEventListener("mouseleave", function () {
        document.querySelector("#im1").style.opacity = 0;
        document.querySelector("#im2").style.opacity = 0;
        document.querySelector("#im3").style.opacity = 0;
        document.querySelector("#im4").style.opacity = 0;
        document.querySelector("#im5").style.opacity = 0;
        document.querySelector("#im").style.opacity = 1;
    });
  
    document.querySelector("#two").addEventListener("mouseenter", function () {
        document.querySelector("#im1").style.opacity = 0;
        document.querySelector("#im2").style.opacity = 1;
        document.querySelector("#im3").style.opacity = 0;
        document.querySelector("#im4").style.opacity = 0;
        document.querySelector("#im5").style.opacity = 0;
    });
    document.querySelector("#two").addEventListener("mouseleave", function () {
        document.querySelector("#im1").style.opacity = 0;
        document.querySelector("#im2").style.opacity = 0;
        document.querySelector("#im3").style.opacity = 0;
        document.querySelector("#im4").style.opacity = 0;
        document.querySelector("#im5").style.opacity = 0;
    });
  
    document.querySelector("#three").addEventListener("mouseenter", function () {
        document.querySelector("#im1").style.opacity = 0;
        document.querySelector("#im2").style.opacity = 0;
        document.querySelector("#im3").style.opacity = 1;
        document.querySelector("#im4").style.opacity = 0;
        document.querySelector("#im5").style.opacity = 0;
    });
    document.querySelector("#three").addEventListener("mouseleave", function () {
        document.querySelector("#im1").style.opacity = 0;
        document.querySelector("#im2").style.opacity = 0;
        document.querySelector("#im3").style.opacity = 0;
        document.querySelector("#im4").style.opacity = 0;
        document.querySelector("#im5").style.opacity = 0;
    });
  
    document.querySelector("#four").addEventListener("mouseenter", function () {
        document.querySelector("#im1").style.opacity = 0;
        document.querySelector("#im2").style.opacity = 0;
        document.querySelector("#im3").style.opacity = 0;
        document.querySelector("#im4").style.opacity = 1;
        document.querySelector("#im5").style.opacity = 0;
    });
    document.querySelector("#four").addEventListener("mouseleave", function () {
        document.querySelector("#im1").style.opacity = 0;
        document.querySelector("#im2").style.opacity = 0;
        document.querySelector("#im3").style.opacity = 0;
        document.querySelector("#im4").style.opacity = 0;
        document.querySelector("#im5").style.opacity = 0;
    });
  
    document.querySelector("#five").addEventListener("mouseenter", function () {
        document.querySelector("#im1").style.opacity = 0;
        document.querySelector("#im2").style.opacity = 0;
        document.querySelector("#im3").style.opacity = 0;
        document.querySelector("#im4").style.opacity = 0;
        document.querySelector("#im5").style.opacity = 1;
    });
    document.querySelector("#five").addEventListener("mouseleave", function () {
        document.querySelector("#im1").style.opacity = 0;
        document.querySelector("#im2").style.opacity = 0;
        document.querySelector("#im3").style.opacity = 0;
        document.querySelector("#im4").style.opacity = 0;
        document.querySelector("#im5").style.opacity = 0;
    });
  }
  
  nav();
  
  function navScroll() {
    var tl = gsap.timeline();
    tl.to("#nav", {
      scrollTrigger: {
        trigger: ".pg2",
        scroller: "#main",
        start: "top 50%",
        end: "top 60%",
        scrub: true,
        scrub: 1,
      },
      //    y:100,
      backgroundColor: "#e6dcdc",
      borderBottom: "2px solid #cec3c3",
      ease: Expo.easeInout,
    })
      .to("#nav .menu_circle", {
        scrollTrigger: {
          trigger: ".pg2",
          scroller: "#main",
          start: "top 50%",
          end: "top 60%",
          scrub: true,
          scrub: 1,
        },
        //    y:100,
        border: "1px solid #000",
        ease: Expo.easeInout,
      })
      .to("#nav .menu_circle .line", {
        scrollTrigger: {
          trigger: ".pg2",
          scroller: "#main",
          start: "top 50%",
          end: "top 60%",
          scrub: true,
          scrub: 1,
        },
        //    y:100,
        backgroundColor: "#000",
        ease: Expo.easeInout,
      })
      .to(".menu_icon h6", {
        scrollTrigger: {
          trigger: ".pg2",
          scroller: "#main",
          start: "top 50%",
          end: "top 60%",
          scrub: true,
          scrub: 1,
        },
        color: "#000",
        ease: Expo.easeInout,
      })
      .to("#nav .search", {
        scrollTrigger: {
          trigger: ".pg2",
          scroller: "#main",
          start: "top 50%",
          end: "top 60%",
          scrub: true,
          scrub: 1,
        },
        border: "1px solid #000",
        ease: Expo.easeInout,
      })
      .to("#nav .search i , .right_nav h6 ", {
        scrollTrigger: {
          trigger: ".pg2",
          scroller: "#main",
          start: "top 50%",
          end: "top 60%",
          scrub: true,
          scrub: 1,
        },
        color: "#000",
        ease: Expo.easeInout,
      })
     
  }
  
  navScroll();
  