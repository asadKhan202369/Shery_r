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