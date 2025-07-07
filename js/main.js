document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section'); // Target all section elements
    const heroSection = document.querySelector('.hero'); // Specifically target the hero

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the section is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once it's visible if you don't want re-animation
                // observer.unobserve(entry.target);
            } else {
                // Optional: remove class if you want animation to re-trigger on scroll up/down
                // entry.target.classList.remove('is-visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Add class to prepare for animation
        observer.observe(section);
    });

    // Special handling for hero if it needs to be animated immediately or differently
    if (heroSection) {
        heroSection.classList.add('fade-in-section');
        // Make hero visible immediately without waiting for scroll
        // Or apply a different animation that doesn't need JS observation
        setTimeout(() => {
            heroSection.classList.add('is-visible');
        }, 100); // Small delay to ensure CSS transition applies
    }

});
