// import { gsap } from "./lib/gsap.js";

// import { ScrollTrigger } from "./lib/gsap-scroll.js";

gsap.registerPlugin(ScrollTrigger);
const contents = gsap.utils.toArray("#hscroll .content")

gsap.to(contents, {
    xPercent: -100 * 3,
    ease: 'none',
    scrollTrigger: {
        trigger: "#hscroll",
        pin: true,
        scrub: 1
    }
});