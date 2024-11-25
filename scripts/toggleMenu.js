import { gsap } from "../node_modules/gsap/all.js";
import { Flip } from "../node_modules/gsap/Flip.js";
gsap.registerPlugin(Flip);

let square = document.getElementById('menu');
let container = document.getElementById('container');
let menuContainer = document.getElementById('menu_container');
let content = document.getElementById('content');
const listeMobile = document.getElementById('listeMobile');
const links = listeMobile.querySelectorAll('a');

function anim() {
    // Capture l'état initial avant tout changement DOM
    if (square.classList.contains("square-small")) {
        square.classList.remove("hidden");
    }
    let state = Flip.getState(square);

    if (square.classList.contains("square-small")) {
        // Ouvrir le menu
        container.appendChild(square);
        container.classList.add("z-50");
        square.classList.remove("square-small");
        square.classList.add("square-large");
    } else {
        // Fermer le menu
        content.classList.add("hidden");
        square.classList.remove("square-large");
        square.classList.add("square-small");
        container.classList.remove("z-50");
        menuContainer.appendChild(square);
    }

    // Joue l'animation Flip
    Flip.from(state, {
        duration: 0.25,
        ease: "ease",
        onComplete: () => {
            content.classList.remove("hidden");
            if (square.classList.contains("square-small")) {
                square.classList.add("hidden");
            }
            // S'assurer que les classes finales sont bien appliquées
        },
    });
}

// Ajoute les écouteurs d'événements
menuContainer.addEventListener("click", (e) => {
    anim();
});

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        anim();
    });
});

document.getElementById("close").addEventListener("click", (e) => {
    anim();
});