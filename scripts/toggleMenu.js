let mobileMenu = document.getElementById('mobile-menu');
let menu = document.querySelector('.burger-menu');
let links = document.querySelectorAll('a');
const body = document.body;

function toggleMenu() {
    // On bascule la visibilité du menu en ajoutant/retirant la classe 'hidden'
    mobileMenu.classList.toggle('show');
    body.classList.toggle("overflow-hidden");
}


links.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove('show');
        body.classList.remove("overflow-hidden");
    });
});