// ============================================
// main.js — Funcionalidades globales del portafolio
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    // ─── 1. PRELOADER ───
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('preloader--hidden');
            setTimeout(() => preloader.remove(), 600);
        });
        // Fallback: forzar ocultar después de 3s
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('preloader--hidden');
                setTimeout(() => preloader.remove(), 600);
            }
        }, 3000);
    }

    // ─── 2. ANIMACIONES AL SCROLL (IntersectionObserver) ───
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => scrollObserver.observe(el));

    // ─── 3. EFECTO TYPEWRITER ───
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        const text = typewriterEl.dataset.text || typewriterEl.textContent;
        typewriterEl.textContent = '';
        typewriterEl.style.visibility = 'visible';
        let i = 0;
        const speed = 45;
        function typeChar() {
            if (i < text.length) {
                typewriterEl.textContent += text.charAt(i);
                i++;
                setTimeout(typeChar, speed);
            } else {
                typewriterEl.classList.add('typewriter--done');
            }
        }
        setTimeout(typeChar, 600);
    }

    // ─── 4. TOGGLE DARK / LIGHT MODE ───
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
        }

        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
        });
    }

    // ─── 5. MENÚ HAMBURGUESA ───
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav__links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger--active');
            navLinks.classList.toggle('nav__links--open');
        });
        // Cerrar al clickear enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('hamburger--active');
                navLinks.classList.remove('nav__links--open');
            });
        });
    }

    // ─── 6. BOTÓN VOLVER ARRIBA ───
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('back-to-top--visible');
            } else {
                backToTop.classList.remove('back-to-top--visible');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ─── 7. FILTRO DE TAGS EN BLOG ───
    const tagFilters = document.querySelectorAll('.tag-filter');
    if (tagFilters.length > 0) {
        tagFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                tagFilters.forEach(b => b.classList.remove('tag-filter--active'));
                btn.classList.add('tag-filter--active');
                const filter = btn.dataset.tag;
                const cards = document.querySelectorAll('.blog-card');
                cards.forEach(card => {
                    if (filter === 'all' || card.dataset.tag === filter) {
                        card.style.display = '';
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ─── 8. FORMULARIO DE CONTACTO (Formspree) ───
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Enviando...';
            btn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    btn.textContent = '✅ ¡Mensaje Enviado!';
                    contactForm.reset();
                    setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
                } else {
                    btn.textContent = '❌ Error, intenta de nuevo';
                    setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
                }
            } catch {
                btn.textContent = '❌ Error de conexión';
                setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
            }
        });
    }
});
