document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Navigation Links & Hero Button
    const navLinks = document.querySelectorAll('.nav-bar a, .btn-primary');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Check if the link points to an anchor on the same page
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Smoothly scroll to the section, accounting for a fixed header offset
                    const headerOffset = 80; 
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Sticky Header Effects on Scroll
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }

    // 3. Reveal Elements on Scroll (Intersection Observer for Gallery & Leadership)
    const revealElements = document.querySelectorAll('.leader-card, .gallery-item');
    
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop tracking once animated
                }
            });
        }, {
            threshold: 0.1 // Triggers when 10% of the element is visible
        });

        revealElements.forEach(element => {
            element.classList.add('reveal-init'); 
            revealOnScroll.observe(element);
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
        });
    }
});
