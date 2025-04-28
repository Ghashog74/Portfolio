// import { gsap } from "./lib/gsap.js";
// import { Flip } from "./lib/gsap-flip.js";
gsap.registerPlugin(Flip);

let projects = document.querySelectorAll(".projectCard");

projects.forEach((project) => {
    let tl = gsap.timeline({paused: true});
    
    tl.to(project.querySelector(".smallTitle"), {
        opacity: 0,
        duration: 0.5,
        y: '-200%',
    }, 0);

    tl.to(project.querySelector(".smallDate"), {
        opacity: 0,
        duration: 0.5,
        y: '-300%',
    }, 0);

    tl.to(project.querySelector(".smallImg"), {
        opacity: 0,
        duration: 0.5,
        scale: 0.5,
    }, 0);

    tl.to(project.querySelector(".contentLarge"), {
        opacity: 1,
        duration: 0.5,
        scale: 1,
    }, 1);

    project.addEventListener("click", () =>{
        let state = Flip.getState(project);
        if(project.classList.contains('project-small')){
            project.classList.remove('project-small');
            project.classList.add('project-large');
            let placeholder = document.createElement('div');
            placeholder.className = 'placeholder';
            project.after(placeholder);
            document.body.style.overflowY = 'hidden';
            tl.play();
        } else {
            project.classList.add('z-50');
            tl.reverse(0);
            project.classList.remove('project-large');
            project.classList.add('project-small');
        }
        
        Flip.from(state, {
            duration: 0.5,
            delay: 0.5,
            onComplete: () => {
                if(!project.classList.contains('project-small')){
                    document.querySelector('.placeholder').remove();
                } else {
                    project.classList.remove('z-50');
                    document.body.style.overflowY = 'auto';
                }
            }
        });
    })
});