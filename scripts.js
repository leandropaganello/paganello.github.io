document.addEventListener('DOMContentLoaded', () => {
    
    // --- Easter Egg: Konami Code ---
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    document.addEventListener('keydown', (e) => {
        konamiCode[konamiIndex] === e.key ? konamiIndex++ : konamiIndex = 0;
        if (konamiIndex === konamiCode.length) {
            activateKonamiEasterEgg();
            konamiIndex = 0;
        }
    });
    
    function activateKonamiEasterEgg() {
        const msg = document.createElement('div');
        msg.textContent = '🎮 Du hast das Konami-Code Easter Egg gefunden! Glückwunsch, Nerd! 🎮';
        msg.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#8a2be2;color:#fff;padding:30px;border-radius:10px;z-index:5000;font-size:1.2rem;font-weight:bold;animation:bounce 0.5s;`;
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 3000);
        addConfetti();
    }
    
    // --- Easter Egg: Logo Click Counter ---
    const logo = document.querySelector('.logo');
    let clickCount = 0;
    if (logo) {
        logo.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 5) {
                showSecretMessage("🚀 Leandro's geheime Mission: Weltbeste Technische Direktionen starten!");
            } else if (clickCount === 10) {
                showSecretMessage("⚡ Level 2 unlocked: Du kennst jetzt ein Easter Egg!");
                activateLogoGlitch();
            } else if (clickCount === 15) {
                showSecretMessage("🎪 Herzlich Willkommen in der Easter Egg Höhle!");
            }
        });
    }
    
    function showSecretMessage(msg) {
        const el = document.createElement('div');
        el.textContent = msg;
        el.style.cssText = `position:fixed;bottom:20px;right:20px;background:#8a2be2;color:#fff;padding:15px 25px;border-radius:8px;z-index:5000;animation:slideIn 0.4s;`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
    }
    
    function activateLogoGlitch() {
        logo.style.animation = 'glitch 0.3s';
        setTimeout(() => logo.style.animation = '', 300);
    }
    
    // --- Keyboard Shortcuts Info Dialog ---
    function showKeyboardShortcuts() {
        const shortcuts = [
            ['T', 'Theme toggle'],
            ['↑↑↓↓←→←→BA', 'Konami Code'],
            ['?', 'Shortcuts anzeigen'],
        ];
        const dialog = document.createElement('div');
        dialog.className = 'shortcuts-dialog';
        dialog.innerHTML = '<h3 style="margin-bottom:20px;">⌨️ Keyboard Shortcuts</h3>' + 
            shortcuts.map(([key, desc]) => `<div style="margin:10px 0;"><kbd style="background:#8a2be2;color:#fff;padding:4px 8px;border-radius:4px;font-weight:bold;">${key}</kbd> → ${desc}</div>`).join('') +
            '<p style="margin-top:20px; font-size:0.85rem; color:#9ca3af;">Drücke ESC zum Schließen</p>';
        document.body.appendChild(dialog);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') dialog.remove();
        }, { once: true });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === '?') showKeyboardShortcuts();
    });
    
    // --- Add CSS for new elements ---
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glitch {
            0%, 100% { transform: translate(0); }
            25% { transform: translate(-2px, 2px); }
            50% { transform: translate(2px, -2px); }
            75% { transform: translate(-2px, -2px); }
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        .shortcuts-dialog {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--card-bg);
            border: 1px solid var(--border);
            padding: 30px;
            border-radius: 12px;
            z-index: 5000;
            max-width: 400px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            color: var(--text-main);
        }
    `;
    document.head.appendChild(style);
    
    // --- Easter Egg: Developer Console Greeting ---
    console.clear();
    console.log('%c🚀 Leandro Paganello Portfolio', 'font-size:18px; font-weight:bold; color:#8a2be2; text-shadow: 0 0 10px rgba(138,43,226,0.5)');
    console.log('%cWillkommen im geheimen Developer Bereich! 👀', 'font-size:14px; color:#a78bfa; font-weight:bold;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color:#8a2be2');
    console.log('Geheime Commands:', '\n✨ window.leandroSecret() - Zeige versteckte Info\n🎮 Konami-Code: ↑ ↑ ↓ ↓ ← → ← → B A\n🖱️ Klick das Logo 5x, 10x, 15x für Überraschungen\n⌨️ Drücke "?" für Keyboard Shortcuts');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color:#8a2be2');
    
    // Secret window function
    window.leandroSecret = function() {
        const stats = {
            yearsExperience: new Date().getFullYear() - 2015,
            projectsCompleted: '50+',
            happy_clients: '30+',
            lines_of_code: '100k+',
            coffee_cups: '∞'
        };
        console.log('%c✨ Leandro\'s Secret Stats ✨', 'color:#ff1493; font-size:14px; font-weight:bold;');
        console.table(stats);
        console.log('%cVersion: 1.0.0 - "Easter Egg Edition"', 'color:#9ca3af; font-size:12px;');
    };

    function addConfetti() {
        for (let i = 0; i < 30; i++) {
            const conf = document.createElement('div');
            conf.className = 'confetti';
            conf.style.left = Math.random() * 100 + '%';
            conf.style.backgroundColor = ['#8a2be2', '#a78bfa', '#fff', '#ff1493'][Math.floor(Math.random() * 4)];
            document.body.appendChild(conf);
            setTimeout(() => document.body.removeChild(conf), 2000);
        }
    }
    
    // --- 1. Cursor Logic (Smooth Physics) ---
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const nav = document.querySelector('nav');
    const body = document.body;

    // hide custom cursor on touch devices
    if ('ontouchstart' in window || window.matchMedia('(hover: none)').matches) {
        if (dot) dot.style.display = 'none';
        if (ring) ring.style.display = 'none';
    }

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

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light');
            const isLight = body.classList.contains('light');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            if (themeIcon) {
                themeIcon.classList.toggle('fa-sun', isLight);
                themeIcon.classList.toggle('fa-moon', !isLight);
            }
            launchConfetti();
        });
        // keyboard shortcut T
        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 't') themeToggle.click();
        });
    }

    // confetti helper
    function launchConfetti() {
        for (let i = 0; i < 20; i++) {
            const conf = document.createElement('div');
            conf.className = 'confetti';
            conf.style.left = Math.random() * 100 + '%';
            conf.style.backgroundColor = ['#8a2be2', '#a78bfa', '#fff'][Math.floor(Math.random() * 3)];
            document.body.appendChild(conf);
            setTimeout(() => document.body.removeChild(conf), 2000);
        }
    }

    // --- Page Entrance Animation ---
    document.querySelectorAll('h1, h2, h3, .hero-buttons').forEach((el, index) => {
        el.style.animation = `slideIn 0.6s ease-out ${index * 0.1}s forwards`;
        el.style.opacity = '0';
    });

    // Progressive fade-in for sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.animation = 'fadeIn 0.8s ease-in forwards';
    });
    
    // Add fade-in animation to styles
    const fadeInStyle = document.createElement('style');
    fadeInStyle.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(fadeInStyle);

    // set dynamic copyright year
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        const start = 2024;
        const now = new Date().getFullYear();
        yearSpan.textContent = start === now ? `${start}` : `${start}-${now}`;
    }

    // --- Image load fade-in ---
    document.querySelectorAll('.project-image img').forEach(img => {
        img.addEventListener('load', () => img.classList.add('loaded'));
        if (img.complete) img.classList.add('loaded');
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

    // --- Scroll spy (highlight nav) ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    // if on projects-work.html, highlight Selected Work link
    if (window.location.pathname.endsWith('projects-work.html')) {
        navLinks.forEach(link => {
            if (link.getAttribute('href').includes('#work')) {
                link.classList.add('active');
            }
        });
    }
    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#'+entry.target.id);
                });
            }
        });
    }, { threshold: 0.5 });
    sections.forEach(sec => spyObserver.observe(sec));

    // --- Nav hide/show on scroll ---
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const current = window.pageYOffset;
        if (current > lastScroll && current > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        lastScroll = current;
    });

    // --- 4. Progress Bar ---
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // --- Ripple effect on buttons ---
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const circle = document.createElement('span');
            const diameter = Math.max(rect.width, rect.height);
            const radius = diameter / 2;
            circle.style.width = circle.style.height = diameter + 'px';
            circle.style.left = e.clientX - rect.left - radius + 'px';
            circle.style.top = e.clientY - rect.top - radius + 'px';
            circle.classList.add('ripple');
            const ripple = this.getElementsByClassName('ripple')[0];
            if (ripple) {
                ripple.remove();
            }
            this.appendChild(circle);
        });
    });

    // --- Copy email to clipboard (nice to have) ---
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const address = emailLink.textContent.trim();
            navigator.clipboard.writeText(address).then(() => {
                const toast = document.createElement('div');
                toast.textContent = 'E-Mail kopiert';
                toast.style.position = 'fixed';
                toast.style.bottom = '20px';
                toast.style.right = '20px';
                toast.style.background = 'var(--primary)';
                toast.style.color = '#fff';
                toast.style.padding = '10px 20px';
                toast.style.borderRadius = '5px';
                toast.style.zIndex = '2000';
                document.body.appendChild(toast);
                setTimeout(() => document.body.removeChild(toast), 2000);
            });
        });
    }

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
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
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

    // --- Smooth Page Transitions ---
    document.querySelectorAll('a:not([href^="#"]):not([href^="http"]):not([href="mailto:"])').forEach(link => {
        link.addEventListener('click', (e) => {
            if (!link.hasAttribute('download')) {
                const href = link.getAttribute('href');
                if (href) {
                    e.preventDefault();
                    document.body.style.opacity = '0.8';
                    document.body.style.transition = 'opacity 0.3s ease-out';
                    setTimeout(() => {
                        window.location = href;
                    }, 200);
                }
            }
        });
    });

    // --- Image Parallax on Scroll (Subtle Effect) ---
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroImage.style.transform = `translateY(${scrolled * 0.05}px) scale(${1 + scrolled * 0.0001})`;
        });
    }

    // --- Hidden Feature: CV Button Click Counter ---
    let cvClickCount = 0;
    const cvBtn = document.getElementById('cv-btn');
    const hiddenContactOptions = document.getElementById('hidden-contact-options');
    if (cvBtn) {
        cvBtn.addEventListener('click', (e) => {
            cvClickCount++;
            if (cvClickCount === 3) {
                e.preventDefault();
                if (hiddenContactOptions) {
                    hiddenContactOptions.style.display = 'flex';
                    hiddenContactOptions.style.flexDirection = 'column';
                    hiddenContactOptions.style.animation = 'slideIn 0.4s ease-out';
                    showSecretMessage('🔓 Mehr Kontaktoptionen freigeschaltet!');
                }
            }
        });
    }

    // --- Hidden Feature: Expandable Expertise Cards ---
    const expandableCards = document.querySelectorAll('.expandable-card');
    const detailModal = document.getElementById('detail-modal');
    const detailTitle = document.getElementById('detail-title');
    const detailText = document.getElementById('detail-text');
    
    if (expandableCards) {
        expandableCards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const details = card.getAttribute('data-details');
                const title = card.querySelector('h3').textContent;
                detailTitle.textContent = title;
                detailText.textContent = details;
                detailModal.style.display = 'block';
            });
        });
    }
    
    // Close detail modal on outside click
    if (detailModal) {
        window.addEventListener('click', (e) => {
            if (e.target === detailModal) {
                detailModal.style.display = 'none';
            }
        });
    }

    // --- Skill Card Hover Tooltips ---
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.style.transition = 'var(--transition)';
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 30px rgba(138,43,226,0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
});
