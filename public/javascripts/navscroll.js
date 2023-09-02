function navScroll() {
  const newImageSrc = '/images/uploads/Shery Ride-logos/Shery Ride-logos_black.png';
    var tl = gsap.timeline();
    tl.to("#nav", {
      scrollTrigger: {
        trigger: "#page-2 ",
        scroller: "#main",
        start: "top 50%",
        end: "top 60%",
        scrub: true,
        scrub: 1,
      },
      //    y:100,
      backgroundColor: "#fffefe",
      // borderBottom: "2px solid #cec3c3",
      ease: Expo.easeInout,
    })
    .to("#logoimg", {
      scrollTrigger: {
        trigger: "#page-2 ",
        scroller: "#main",
        start: "top 40%",
        end: "top 60%",
        scrub: true,
        // scrub: 1,
      },
      delay:-1,
      attr: { src: newImageSrc },
      ease: Expo.easeInout,
    })
     
      .to("#nav h6, #MENU,#search", {
        scrollTrigger: {
          trigger: "#page-2 ",
          scroller: "#main",
          start: "top 50%",
          end: "top 60%",
          scrub: true,
          scrub: 1,
        },
        color: "#000",
        ease: Expo.easeInout,
      });
}
  
navScroll();
