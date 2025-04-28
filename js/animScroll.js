import { gsap } from "../node_modules/gsap/all.js";
    
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";

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