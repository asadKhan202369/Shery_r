// document.querySelector("#MENU").addEventListener("click", function () {
//     // document.querySelector("#main2").display = "initial"
//     document.querySelector("#fullscreen-nav").style.right = "0%"
//     document.querySelector("#fullscreen-nav").display = "initial"
//     document.querySelector("#nav").style.display = "none"
// })
// document.querySelector("#cross").addEventListener("click", function () {
//     document.querySelector("#fullscreen-nav").style.left = "100vw"
//     document.querySelector("#nav").style.display = "flex"
// })
  
function nav() {
    var flag = 0;
  
    
  const newImageSrc = '/images/uploads/Shery Ride-logos/Shery Ride-logos_black.png';
  const original = '/images/uploads/Shery Ride-logos/Shery Ride-logos_white.png';
    document .querySelector("#MENU")
        .addEventListener("click", function () {
                document.querySelector("#MENU").style.display = "none";
                document.querySelector("#navclose").style.display = "initial";
                var tl = gsap.timeline();
                tl.to("#nav_loader", {
                    height: "100vh",
                })
                    .to(" #nav_loader #images img", {
                        // delay: -0.5,
                        width: "68vh",
                        ease: Expo.easeInout,
                        duration: 1,
                    })
                    .to("#nav_loader #links .containers h1", {
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
                    .to("#logoimg", {
                        delay:-2,
                        attr: { src: newImageSrc },
                        ease: Expo.easeInout,
                      })
                    .to(".right_nav h6",{
                      color:"#000",
                      delay:-1
                  })
                  .to("#nav_loader #links .profile",{
                    opacity:1,
                    // delay:-1
                  })
                   
                flag = 1;
  
            
        });

        document .querySelector("#navclose")
        .addEventListener("click", function () {

            var tl = gsap.timeline();
            tl.to(" #nav_loader #images img", {
                delay: -0.5,
                width: "0vh",
                ease: Expo.easeInout,
                duration: 1,
            })
            .to("#nav_loader #links .profile",{
                opacity:0,
                delay:-.5
              })
                .to("#nav_loader #links .containers h1", {
                    y: 100,
                    ease: Expo.easeInout,
                    duration: 1,
                })
             
                .to("#nav_loader", {
                    height: "0vh",
                })
                .to("#nav_loader #links .containers h1", {
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
              
               
                .to(".right_nav h6",{
                    color:"#fff",
                    delay:-1
                })
                .to("#logoimg", {
                    delay:-2,
                    attr: { src: original },
                    ease: Expo.easeInout,
                })
                
                function navi(){
                    document.querySelector("#navclose").style.display = "none";
                    document.querySelector("#MENU").style.display = "initial";
                }
                setTimeout(navi, 1800);
            
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

// nav();

function popup(){
    document.querySelector("#userLogin")
.addEventListener("mouseenter",function(){
     gsap.to("#popup_box ",{
        display:"flex",
        ease:Expo.easeInout,
     })
})

document.querySelector("#popup_box")
.addEventListener("mousemove",function(){
     gsap.to("#popup_box",{
        display:"flex",
        ease:Expo.easeInout,
     })
})
document.querySelector("#popup_box")
.addEventListener("mouseleave",function(){
     gsap.to("#popup_box",{
        display:"none",
        ease:Expo.easeInout,
     })
})

document.querySelector("#userLogin")
.addEventListener("mouseleave",function(){
     gsap.to("#popup_box ",{
        display:"none",
        ease:Expo.easeInout,
     })
})
}
popup();


document.querySelector("#MENU")
.addEventListener("click",function(){
        gsap.to("#side_nav",{
            display:"initial",
            x:0,
            ease:Expo.easeInout,
            duration:1
        }) 
})


document.querySelector(".cancel")
.addEventListener("click",function(){
        gsap.to("#side_nav",{
            display:"none",
            x:1000,
            ease:Expo.easeInout,
            duration:2
        }) 
})

