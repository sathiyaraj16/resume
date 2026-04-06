// script.js

/**
 * Performance Optimization:
 * IntersectionObserver remains the best approach to handle scroll animations
 * efficiently without blocking the main thread.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerConfig = {
        root: null, 
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1 
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve for performance
                observer.unobserve(entry.target);
            }
        });
    }, observerConfig);

    fadeElements.forEach(element => {
        scrollObserver.observe(element);
    });

});