function revealtospan() {
  var h1 = document.querySelectorAll(".reveal").forEach(function (elem) {
    var clutter = "";
    elem.textContent.split("").forEach(function (char) {
      clutter += `<span>${char}</span>`;
    });
    elem.innerHTML = clutter;
  });
}
revealtospan();

function effect() {
  let elem = document.querySelector(".pg3 .rows");
  var dim = elem.getBoundingClientRect();

  elem.addEventListener("mousemove", function (dets) {
    var dim = elem.getBoundingClientRect();
    gsap.to(".rows", {
      clipPath: `circle(18% at ${dets.clientX}px ${dets.clientY}px)`,
    });
  });
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(".rows", {
      clipPath: `circle(100% at ${dets.clientX}px ${dets.clientY}px)`,
    });
  });
}
// effect();

function loader() {
  var tl = gsap.timeline({
    onComplete: function () {
      // pg1();
    },
  });
  tl.to(".loader h1", {
    delay: 1,
    opacity: 1,
    duration: 0.5,
    ease: Expo.easeInout,
  })
    .to(".loader .brandname .small", {
      y: 10,
      ease: Expo.easeInout,
    })
    .to(".loader .brandname #big", {
      delay: -0.5,
      y: 5,
      ease: Expo.easeInout,
    })
    .to(".images", {
      opacity: 1,
      ease: Expo.easeInout,
    })
    .to("p", {
      delay: -0.5,
      opacity: 1,
      ease: Expo.easeInout,
    })
    .to(".images #img1", {
      delay: 0.5,
      x: -800,
      duration: 1,
      ease: Expo.easeInout,
    })
    .to(".images #img2", {
      delay: -1,
      x: 800,
      duration: 1,
      ease: Expo.easeInout,
    })

    .to(".loader .brandname .small", {
      y: -100,
      ease: Expo.easeInout,
    })
    .to(".loader .brandname #big", {
      delay: -0.5,
      y: 150,
      ease: Expo.easeInout,
    })
    .to(".images", {
      opacity: 1,
      ease: Expo.easeInout,
    })
    .to("p", {
      delay: -1,
      opacity: 0,
      ease: Expo.easeInout,
    })
    .to(".loader h1", {
      delay:-1,
      opacity: 0,
      duration: 1,
      ease: Expo.easeInout,
    })
    .to(".loader", {
      delay: -0.3,
      height: "0vh",
      duration: 1,
      ease: Expo.easeInout,
    });
}

loader();

function pg1() {
  var tl = gsap.timeline({
    repeat: -1,
  });
  tl.to(".pg1 #img5", {
    opacity: 2,
    duration: 1,
  })
    .to(".pg1 #img6", {
      // delay:-1,
      opacity: 0,
      duration: 1,
    })
    .to(".pg1 #img5", {
      // delay:-1,
      opacity: 0,
      duration: 1,
    })
    .to(".pg1 #img4", {
      delay: -0.5,
      opacity: 1,
      duration: 1,
    })
    .to(".pg1 #img4", {
      opacity: 0,
      duration: 1,
    })
    .to(".pg1 #img3", {
      delay: -0.5,
      opacity: 1,
      duration: 1,
    })
    .to(".pg1 #img3", {
      opacity: 0,
      duration: 1,
    })
    .to(".pg1 #img2", {
      delay: -0.5,
      opacity: 1,
      duration: 1,
    })
    .to(".pg1 #img2", {
      opacity: 0,
      duration: 1,
    })
    .to(".pg1 #img1", {
      delay: -0.5,
      opacity: 1,
      duration: 1,
    });
}

// gsap.to("#nav", {
//   scrollTrigger: {
//     scroller: "body",
//     trigger: ".pg2",
//     start: "top 90%",
//     markers: false,
//     scrub: true,
//   },
//   top: "0%",
//   padding: "10px 80px",
//   backgroundColor: "#fff",
// });

function search() {
  let s = document.querySelector("#nav .search i");
  let search = document.querySelector(".search_section");
  let menu = document.querySelector(".menu");
  var flag = 0;
  document.querySelector("#nav .search").addEventListener("click", function () {
    if (flag === 0) {
      menu.style.opacity = "0";
      s.classList.remove("ri-search-line");
      s.classList.add("ri-close-line");
      gsap.to(search, {
        width: "100%",
        ease: Expo.easeInout,
        duration: 0.5,
      });

      flag = 1;
    } else {
      s.classList.remove("ri-close-line");
      s.classList.add("ri-search-line");
      gsap.to(search, {
        width: "0%",
        ease: Expo.easeInout,
        duration: 0.5,
      });
      menu.style.opacity = "1";
      flag = 0;
    }
  });
}
search();

function side_nav() {
  let m = document.querySelector("#nav .menu i");
  let menu = document.querySelector("#nav .menu ");
  let sidenav = document.querySelector(".side_nav");
  var flag = 0;

  m.addEventListener("click", function () {
    if (flag === 0) {
      sidenav.style.display = "flex";
      m.classList.remove("ri-menu-line");
      m.classList.add("ri-close-line");
      menu.style.backgroundColor = "#fff";
      sidenav.style.paddingLeft = "5vw";
      var tl = gsap.timeline();
      tl.to(sidenav, {
        width: "50%",
        ease: Expo.easeInout,
        duration: 0.5,
      }).to(".side_nav a", {
        delay: 0.5,
        y: 0,
        opacity: 1,
        ease: Expo.easeInout,
        duration: 0.5,
      });
      flag = 1;
    } else {
      var tl = gsap.timeline({});
      tl.to(".side_nav a", {
        delay: 0.5,
        y: -100,
        ease: Expo.easeInout,
        opacity: 0,
        duration: 0.5,
      })
        .to(sidenav, {
          paddingLeft: "0vw",
          ease: Expo.easeInout,
        })
        .to(sidenav, {
          delay: -0.5,
          width: "0%",
          ease: Expo.easeInout,
          duration: 0.5,
        });

      m.classList.remove("ri-close-line");
      m.classList.add("ri-menu-line");

      gsap.to(".side_nav a", {
        delay: 1,
        y: 100,
      });
      gsap.to(".side_nav a", {
        delay: 2,
        display:"none",
        y: 100,
      });
      flag = 0;
    }
  });
}

side_nav();


gsap.to(".pg3 .row .div", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".pg4",
    start: "top 60%",
    // markers: true,
  },
  scale:1,
  ease:Expo.easeInout,
});

// gsap.to(".imgs img",{
//   x:-200,
//   ease:Power0.easeNone,
//   duration:3,
//   repeat:-1
// })


function dom(){
  const canvas = document.querySelector("#home>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/20.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/21.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/22.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/23.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/24.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/25.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/26.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/27.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/28.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/29.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/30.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/31.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/32.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/33.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/34.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/34.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/36.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/37.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/38.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/39.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/40.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/41.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/42.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/43.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/44.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/45.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/46.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/47.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/48.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/49.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/50.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/51.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/52.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/53.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/54.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/55.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/56.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/57.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/58.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/59.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/60.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/61.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/62.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/63.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/64.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/65.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/66.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/67.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/68.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/69.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/70.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/71.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/72.jpg?wm=1&q=75&v=20230516072946,
             https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/1.jpg?q=20&wm=1&v=20230516072946,
             https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/1.jpg?q=20&wm=1&v=20230516072946,
             https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/1.jpg?q=20&wm=1&v=20230516072946,
             https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/1.jpg?q=20&wm=1&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/1.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/2.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/3.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/3.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/3.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/3.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/3.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/8.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/9.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/10.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/10.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/10.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/10.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/13.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/14.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/15.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/16.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/17.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/18.jpg?wm=1&q=75&v=20230516072946,
              https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/19.jpg?wm=1&q=75&v=20230516072946,
              
  `


return data.split("\n")[index];
}

const frameCount = 78;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 1; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:1.8,
      pin:true,
      trigger:"#home",
      // start:"bottom 100%",
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

 

}

dom();