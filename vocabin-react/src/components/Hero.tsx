import { useEffect, useRef } from 'react';
import { ChromeIcon, PlayIcon } from './Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref: mockupRef, isVisible: mockupVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const animateCounter = (element: HTMLElement) => {
      const target = element.textContent || '';
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statNumbers = statsRef.current.querySelectorAll('.stat-number');
    statNumbers.forEach((stat) => observer.observe(stat));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge">🚀 10,000+ aktif kullanıcı</span>
            </div>
            <h1 className="hero-title">Web'de gör, Mobille hatırla, Vocabinle öğren</h1>
            <p className="hero-description">
              Tekrar tekrar çeviriye son. Vocabinle öğrenmek istediğiniz dildeki kelimeleri kalıcı hafızanıza geçirin. Kelimeleri kaydedin vocabin sizin için hatırlatsın. Kalıcı öğrenmeyle ilerlemeyi yakalayın.
            </p>
            <div className="hero-cta">
              <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="btn btn-large btn-primary">
                <ChromeIcon size={24} />
                Ücretsiz Başla
              </a>
              <a href="#demo" className="btn btn-large btn-outline" onClick={(e) => handleNavClick(e, '#demo')}>
                <PlayIcon />
                Demo'yu İzle
              </a>
            </div>
            <div className="hero-stats" ref={statsRef}>
              <div className="stat-item">
                <div className="stat-number">4.8⭐</div>
                <div className="stat-label">Kullanıcı Puanı</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Kaydedilen Kelime</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Ülkeden Kullanıcı</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-visual">
              <div className="floating-card card-1">
                <div className="word">ephemeral</div>
                <div className="translation">geçici, kısa ömürlü</div>
              </div>
              <div className="floating-card card-2">
                <div className="word">serendipity</div>
                <div className="translation">talihli rastlantı</div>
              </div>
              <div className="floating-card card-3">
                <div className="word">ambiguous</div>
                <div className="translation">belirsiz, muğlak</div>
              </div>
              <div
                ref={mockupRef}
                className={`browser-mockup ${mockupVisible ? 'visible' : ''}`}
              >
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <div className="browser-content">
                  <div className="highlight-text">
                    The <span className="highlighted">ephemeral</span> nature of web content...
                  </div>
                  <div className="tooltip-demo">
                    <div className="tooltip-header">ephemeral</div>
                    <div className="tooltip-translation">geçici, kısa ömürlü</div>
                    <button className="tooltip-save">Kaydet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
