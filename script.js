// ==================== Mobile Menu Toggle ====================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ==================== FAQ Accordion ====================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other FAQ items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Header Scroll Effect ====================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ==================== Animate on Scroll ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.feature-card, .step-card, .pricing-card, .testimonial-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== Stats Counter Animation ====================
const statsNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = element.textContent;

    // Check if it's a number
    const numberMatch = target.match(/[\d.]+/);
    if (!numberMatch) return;

    const number = parseFloat(numberMatch[0]);
    const suffix = target.replace(numberMatch[0], '');
    const duration = 2000;
    const increment = number / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < number) {
            element.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statsNumbers.forEach(stat => statsObserver.observe(stat));

// ==================== Pricing Card Hover Effect ====================
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== Feature Cards Stagger Animation ====================
const featureCards = document.querySelectorAll('.feature-card');

const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            featureObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    featureObserver.observe(card);
});

// ==================== Dynamic Year in Footer ====================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = `&copy; ${currentYear} Vocabin Technologies. Tüm hakları saklıdır.`;
}

// ==================== Browser Mockup Animation ====================
const browserMockup = document.querySelector('.browser-mockup');
if (browserMockup) {
    const mockupObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate(-50%, -50%) scale(1)';
                mockupObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    browserMockup.style.opacity = '0';
    browserMockup.style.transform = 'translate(-50%, -50%) scale(0.9)';
    browserMockup.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    mockupObserver.observe(browserMockup);
}

// ==================== Floating Cards Random Movement ====================
const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
    const randomDuration = 3 + Math.random() * 2;
    const randomDelay = index * 0.5;

    card.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
});

// ==================== CTA Section Parallax Effect ====================
const ctaSection = document.querySelector('.cta');

window.addEventListener('scroll', () => {
    if (!ctaSection) return;

    const scrolled = window.pageYOffset;
    const ctaPosition = ctaSection.offsetTop;
    const ctaHeight = ctaSection.offsetHeight;

    if (scrolled > ctaPosition - window.innerHeight && scrolled < ctaPosition + ctaHeight) {
        const offset = (scrolled - ctaPosition + window.innerHeight) * 0.1;
        ctaSection.style.backgroundPosition = `center ${offset}px`;
    }
});

// ==================== Lazy Loading for Images ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== Copy to Clipboard (for future use) ====================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ==================== Add Active State to Current Section in Nav ====================
const sections = document.querySelectorAll('section[id]');

function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = '';
            });
            navLink.style.color = 'var(--primary-green)';
        }
    });
}

window.addEventListener('scroll', highlightNavOnScroll);

// ==================== Performance: Debounce Scroll Events ====================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(highlightNavOnScroll, 15));

// ==================== Console Welcome Message ====================
console.log('%c🌱 Vocabin', 'color: #4ade80; font-size: 24px; font-weight: bold;');
console.log('%cWeb\'de Gezinirken İngilizce Öğrenin', 'color: #6b7280; font-size: 14px;');
console.log('%chttps://vocabin.com', 'color: #22c55e; font-size: 12px;');
