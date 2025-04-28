import { gsap } from "../node_modules/gsap/all.js";

let loadingScreen = document.getElementById("loadingScreen");
document.body.style.overflowY = 'hidden';
gsap.to(loadingScreen , {
    opacity: 0,
    duration: 1,
    delay: 3,
    onComplete: () => {
        loadingScreen.classList.add("hidden");
        document.body.style.overflowY = 'auto';
    },
});
gsap.fromTo('#nomLogo', {
    y: 50,
    opacity: 0,
},{
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 1,
});
