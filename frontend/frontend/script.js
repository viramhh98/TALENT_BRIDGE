const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
})

gsap.registerPlugin(ScrollTrigger)


scroller.on('scroll', ScrollTrigger.update)

// ScrollTrigger.scrollerProxy(
//     '.container', {
//         scrollTop(value) {
//             return arguments.length ?
//             scroller.scrollTo(value, 0, 0) :
//             scroller.scroll.instance.scroll.y
//         },
//         getBoundingClientRect() {
//             return {
//                 left: 0, top: 0, 
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             }
//         }
//     }
// )



ScrollTrigger.addEventListener('refresh', () => scroller.update())


ScrollTrigger.refresh()

document.querySelector("#open-popup").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
  });
  
  document.querySelector(".popup .popup-body .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
  });



  const activePage = window.location.pathname;
  console.log(activePage);
  const btns = document.querySelectorAll(".bottom-nav-btn");


  // Get all navigation links
const navLinks = document.querySelectorAll('#nav .bottom-nav-btn');

// Function to handle click event and toggle active class
function toggleActive() {
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add active class to the clicked link
    this.classList.add('active');
}

// Add click event listener to each navigation link
navLinks.forEach(link => link.addEventListener('click', toggleActive));

  btns.forEach((btn) => {
    btn.classList.remove("active");
  })
  btns.forEach((btn) => {
      if(btn.href.includes(`${activePage}`)){
        btn.classList.add('active');
      }
  });

  barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          duration: 0.5,
          y: 100,
          opacity: 0,
          ease: "power2.out", // Apply easing for smoother transition
          force3D: true // Force GPU acceleration
        });
      },
      enter(data) {
        location.reload();
        return gsap.from(data.next.container, {
          duration: 0,
          y: 100,
          opacity: 0,
          ease: "power2.out",
          onComplete: function() {
            location.reload();
          }
        });
      }
    }]
  });
  