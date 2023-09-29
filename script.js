var animation = gsap.timeline()


animation.from("#animation", {
    opacity:0,
    duration:.8,
    stagger:.5,
    x:-100
})

gsap.from("#hero",{
    scale: .7,
    duration:0.8,
    scrollTrigger: {
        trigger:"#card-container",
        start:"top 0%",
        scrub:true

    }
})

gsap.from("#firstCard",{
    scale: .4,
    duration:0.8,
    scrollTrigger: {
        trigger:"#card-container",
        start:"top 50%",
        x: -100,
        scrub:true

    }
})
gsap.from("#secondCard",{
    scale: .4,
    duration:0.8,
    scrollTrigger: {
        trigger:"#card-container",
        start:"top 70%",
        x: -100,
        scrub:true

    }
})
gsap.from("#lastImg",{
    scale: .4,
    duration:0.8,
    scrollTrigger: {
        trigger:"#card-container",
        start:"top 90%",
        scrub:true

    }
})