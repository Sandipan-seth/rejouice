function smoothScroll() {
    gsap.registerPlugin(ScrollTrigger);

    

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    });


    



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


    ScrollTrigger.refresh();

}

// smoothScroll()


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
            // delay:10
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
swipper()



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
        y:100,
        opacity:0,
        stagger:0.1
    })
    
    tl.from("#page1-content nav h3",{
        delay:-1,
        y:30,
        opacity:0,
        stagger:0.1
    })
}
loading()



function page2Animation(){
    gsap.from("#page2-bottom h2, #page2-left, #page2-right, #page2-top",{
        opacity:0,
        y:50,
        duration:1,
        stagger:0.3,
        scrollTrigger:{
            trigger:"#page2",
            start:"top 50%",
            end:"top 0",
            scroller:"body", 
            // markers: true,
            scrub:3
        },
    })
}
page2Animation()



function page3Animation(){
    gsap.from("#page3-top h2",{
        opacity:0,
        y:50,
        duration:1,
        stagger:0.3,
        scrollTrigger:{
            trigger:"#page3",
            start:"top 50%",
            end:"top 0",
            scroller:"body", 
            // markers: true,
            scrub:3
        },
    })
}
page3Animation()


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