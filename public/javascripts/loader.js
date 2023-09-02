function pg1() {
    var tl = gsap.timeline();
    tl
      
      // .from(".pg1", {
      //   delay: -1,
      //   rotateX: "80deg",
      //   scale: 0,
      //   rotateY: "80deg",
      //   duration: 2,
      //   ease: Expo.easeInout,
      // })
      // .to(".pg1", {
      //   delay: -3,
      //   width: "100%",
      //   height: "100vh",
      //   ease: Expo.easeInout,
      //   backgroundColor: "yelow",
      //   duration: 1,
      // })
      .to("#nav .menu_icon,.button,h6,#search ,#MENU",{
        y: 0,
        ease: Expo.easeInout,
        duration: 1,
      })
    
      .to("#nav .menu_icon",{
        y: 0,
        delay:-1.4,
        ease: Expo.easeInout,
        duration: 1,
      })
      // .to(".overlay .video_div", {
      //   opacity: 1,
      //   ease: Expo.easeInout,
      //   duration: 1,
      // })
      .to("#main", {
        opacity: 1,
        ease: Expo.easeInout,
        duration: 1,
      });
}
  
pg1();


// gsap.from("#MENU",{
//   opacity:0,
// })



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
  