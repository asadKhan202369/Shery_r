// gsap.to('.pg1 .btm',{
//     scrollTrigger:{
//         trigger:".pg1 .btm",
//         scroller:"#main",
//         start:"top 10%",
//         // end:"top 60%",
//       //   end:"start -50%",
//         // scrub:true,
//         // markers:true
//     },
//    opacity:0 
// })


gsap.to(".button",{
  scrollTrigger:{
    scroller:"body",
    trigger:".pg2",
    start:"top 50%",
      // end:"start 20%",
    // scrub:1,
    // markers:true
  },
    opacity:0,
    stagger:.1,
    ease:Expo.easeInout
})




