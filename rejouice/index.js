function smoothScroll() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
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








// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

    

}
smoothScroll();

function cursorEvent() {
    var cursor = document.querySelector("#cursor");
    var page1 = document.querySelector("#page1-content");

    page1.addEventListener("mousemove", (dets) => {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })

    page1.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })


}
cursorEvent();

function swipper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
}
swipper();

function loading(){

    var tl= gsap.timeline()
    
    tl.from("#loader h3",{
        x:100,
        duration:1,
        stagger:0.3,
        opacity:0
    })
    tl.to("#loader h3",{
        x:-100,
        duration:1,
        stagger:0.3,
        opacity:0
    })
    tl.to("#loader",{
        opacity:0,
        display:"none"
    })
    
    tl.from("#page1-content h1 span",{
        // scrub:2,
        y:100,
        opacity:0,
        stagger:0.1
    })
    
    tl.from("#page1-content nav h3",{
        // scrub:2,
        delay:-1,
        y:30,
        opacity:0,
        stagger:0.1
    })
}
loading();

function page2Animation(){
    gsap.from("#page2-bottom h2, #page2-left, #page2-right, #page2-top",{
        opacity:0,
        y:50,
        duration:1,
        stagger:0.1,
        scrollTrigger:{
            trigger:"#page2",
            start:"top 50%",
            end:"top 0",
            scroller:"#main", 
            // markers: true,
            // pin:true,
            scrub:3
        },
    })
}
page2Animation();

function page3Animation(){
    gsap.from("#page3-top h2",{
        opacity:0,
        y:50,
        duration:1,
        stagger:0.3,
        scrollTrigger:{
            // pin:true,
            trigger:"#page3",
            start:"top 70%",
            end:"top 30%",
            scroller:"#main", 
            // markers: true,
            scrub:3
        },
    })
}
page3Animation();

function cursorEvent2() {
    var cursor2 = document.querySelector("#cursor2");
    var page4 = document.querySelector("#page4");

    page4.addEventListener("mousemove", (dets) => {
        gsap.to(cursor2, {
            x: dets.x,
            y: dets.y
        })
    })

    page4.addEventListener("mouseenter", () => {
        gsap.to(cursor2, {
            scale: 1,
            // delay:10
            opacity: 1
        })
    })

    page4.addEventListener("mouseleave", () => {
        gsap.to(cursor2, {
            scale: 0,
            opacity: 0
        })
    })


}
cursorEvent2();

function faketextAnimation(){
    gsap.from("#fake-text, #text",{
        opacity:0,
        y:50,
        duration:1,
        stagger:0.1,
        scrollTrigger:{
            trigger:"#page4-top",
            start:"top 70%",
            end:"top 0",
            scroller:"#main", 
            // markers: true,
            // pin:true,
            scrub:3
        },
    })
}
faketextAnimation();

function scrollNumber(){
    gsap.to("#scroll-number",{
        y:-650,
        duration:0.5,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#seats",
            start:"top 70%",
            end:"50% top",
            // markers: true,
        }
    })
}
scrollNumber();

function menuOpening(){
    var navRight = document.querySelector("#navRight");
    var menu = document.querySelector("#menu");
    
    navRight.addEventListener("click",()=>{
        gsap.to("#menu",{
            opacity:1,
            y:0,
            duration:0.3
        })
    })
}
menuOpening();

function menuClosing(){
    var close= document.querySelector("#menuNavRight");
    close.addEventListener("click",()=>{
        gsap.to("#menu",{
            opacity:0,
            y:-1000,
            duration:1
        })
    })
}
menuClosing();
