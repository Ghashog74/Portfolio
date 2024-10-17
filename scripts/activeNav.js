document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('nav a').forEach(link => {
                        link.classList.remove('active');

                        // Vérification si l'ID est vide
                        const targetId = entry.target.id ? `#${entry.target.id}` : '#main-page';
                        
                        if (link.getAttribute('href') === targetId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        },
        {
            threshold: 0.7
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});