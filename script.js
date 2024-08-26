gsap.registerPlugin(ScrollTrigger)

function smoothscroll() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}
smoothscroll();


// Gsap code


var t1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-1",
        scroller: "body",
        // markers: true,
        start: "50% 50%",
        end: "250% 50%",
        scrub: 2,
        pin: true,
    },
});

t1.to("#page-1 #rotate-div", {
    transform: "rotate(-10deg)",
    scale: "0.8",
    opacity: "0.3",
}, "en");

t1.to("#row-div-2", {
    transform: "translateY(-10%)",
}, "en")

t1.to("#row-div-3", {
    transform: "translateY(10%)",
}, "en")

t1.to("#row-div-4", {
    transform: "translateY(-3%)",
}, "en")

t1.to("#row-div-5", {
    transform: "translateY(15%)",
}, "en")

t1.to("#overlay-content h1", {
    opacity: "1",
    delay: 0.2
}, "en")

t1.to(".scroll-down", {
    opacity: "1",
}, "en")

t1.to("#overlay-content", {
    backgroundColor: "#00000062",
}, "en")

t1.to(".scroll-progress", {
    width: "100%",
}, "en")

// Page-2 

var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-2",
        scroller: "body",
        // markers: true,
        start: "10% 50%",
        end: "10% 40%",
        scrub: 2,
    },
});

t2.to("#rounded-wrapper", {
    height: "0%",
    marginTop: "0px",
})


// Text animation

function page2herotextAnime() {

    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char, i) => {

        const text = new SplitType(char, { types: 'chars' });

        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                // markers: true,
            },
            color: "#000",
            opacity: 0.1,
            stagger: 0.1,
        })

    })

}
page2herotextAnime();

// Page-3 Animation


var t3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-3",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        // markers: true,
        endTrigger: ".last",
        stagger: 1,
        duration: 2,
        scrub: 1,
    },
});


t3.to(".right-container", {
    transform: "translateY(-110%)",
}, "es")


t3.to(".left-img-container img", {
    rotateZ: 400,
}, "es")


t3.to(".left-img-container", {
    transform: "translateX(110%)",
}, "sm")

t3.to(".left-img-container img", {
    rotateZ: 900,
}, "sm")



// Page-4

var t4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-4",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "10% 40%",
        scrub: 2,
    },
});


t4.to(".page-4-heading", {
    transform: "translateY(-50%)",
    opacity: 1,
})

function page4herotextAnime() {

    const splitText = document.querySelectorAll(".reveal-text");

    splitText.forEach((char, i) => {

        const text = new SplitType(char, { types: 'chars' });

        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                // markers: true,
            },
            color: "#000",
            opacity: 0.1,
            stagger: 0.1,
        })

    })

}
page4herotextAnime();




function page5herotextAnime() {

    const splitText = document.querySelectorAll(".p-5-reveal-text");

    splitText.forEach((char, i) => {

        const text = new SplitType(char, { types: 'chars' });

        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 70%',
                end: 'top 20%',
                scrub: true,
                // markers: true,
            },
            color: "#000",
            opacity: 0.1,
            stagger: 0.1,
        })

    })

}
page5herotextAnime();



// page-5 animations

// Page-5


var t5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-5",
        scroller: "body",
        start: "top 50%",
        end: "10% 40%",
        // markers: true,
        scrub: 1,
        ease: "power4.inOut",
    },
});

t5.to("#pg-5-rounded-wrapper", {
    height: "0px",
})



// page-6 animations

// Page-6

var t6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-6",
        scroller: "body",
        start: "top 10%",
        end: "50% -200% " ,
        // markers: true,
        stagger: 1,
        scrub: 2,
        ease: "power1.inOut",
        pin: true,
    },
});


t6.to(".page-6btn", {
    duration:2.5,
    top: "85%",
    transform: "translate(-50% ,-50%)",
})

t6.to(".image-container", {
    duration:2.5,
    ease: "power1.inOut",
    height: "100%",
},"horizontal")

t6.to(".contain-left", {
    duration:2.5,
    ease: "power1.inOut",
    transform: "translate(-62%, -62%)",
}, "horizontal")

t6.to(".contain-right", {
    duration:2.5,
    ease: "power1.inOut",
    transform: "translate(57%, 57%)",
}, "horizontal")


t6.to(".img-1", {
    transform: "translateY(-100%)",
    ease: "power1.inOut",
    duration:1,
})

t6.to(".img-2", {
    transform: "translateY(-100%)",
    ease: "power1.inOut",
    duration:1,
})
t6.to(".img-3", {
    transform: "translateY(-100%)",
    ease: "power1.inOut",
    duration:1,
})
t6.to(".img-4", {
    transform: "translateY(-100%)",
    ease: "power1.inOut",
    duration:1,
})

t6.to(".img-5", {
    transform: "translateY(-100%)",
    ease: "power1.inOut",
    duration:1,
})
t5.to(".img-6", {
    transform: "translateY(-100%)",
    ease: "power1.inOut",
    duration:1,
})
t6.to(".img-7", {
    transform: "translateY(-100%)",
    ease: "power1.inOut",
    duration:1,
})

t6.to(".img-8", {
    transform: "translateY(-100%)",
    ease: "power1.inOut",
    duration:1,
})



