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

    // --- 3. Smooth Scrolling for Nav Links ---
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 4. Progress Bar ---
    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // --- 5. Back to Top Button ---
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 6. Project Filter ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'grid';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- 7. Project Modal ---
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click if any
            const card = btn.closest('.project-card');
            const title = card.querySelector('h3').textContent;
            const details = btn.getAttribute('data-details');
            const imageSrc = btn.getAttribute('data-image');

            modalTitle.textContent = title;
            modalDescription.textContent = details;
            modalImage.src = imageSrc;
            modalImage.onerror = () => {
                modalImage.src = 'https://via.placeholder.com/600x400/1a1a1a/333?text=Project+Image';
            };
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // --- 8. Animate Progress Bars ---
    const progressCircles = document.querySelectorAll('.progress-circle-fill');
    let animated = false;

    const animateProgress = () => {
        if (animated) return;
        progressCircles.forEach(circle => {
            const percent = parseInt(circle.getAttribute('data-percent'));
            const circumference = 314; // 2 * Math.PI * 50
            const offset = circumference - (circumference * percent / 100);
            circle.style.strokeDashoffset = offset;
        });
        animated = true;
    };

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgress();
                }
            });
        }, { threshold: 0.5 });
        skillsObserver.observe(skillsSection);
    }
});
