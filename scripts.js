document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Cursor Logic (Smooth Physics) ---
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const body = document.body;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Dot moves instantly
        dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
    });

    function animateCursor() {
        // Lerp for smooth movement
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        
        ring.style.transform = `translate3d(${ringX - 15}px, ${ringY - 15}px, 0)`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover Effects
    const triggers = document.querySelectorAll('.hover-trigger, a, button');
    triggers.forEach(el => {
        el.addEventListener('mouseenter', () => body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => body.classList.remove('hovering'));
    });

    // --- 2. Scroll Reveal ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});