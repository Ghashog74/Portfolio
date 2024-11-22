import { gsap } from "../node_modules/gsap/all.js";
import { Flip } from "../node_modules/gsap/Flip.js";
gsap.registerPlugin(Flip);

let container =document.querySelector(".project-container");
let project = document.querySelector(".project");
console.log(project, container);

container.addEventListener("click", (e) => {
    let state = Flip.getState(project);
    container.appendChild(project);
    project.classList.remove("project-small");
    project.classList.add("project-large");	
    Flip.from(state, {
        duration : 1,
        ease: "power1.out"
    })
});