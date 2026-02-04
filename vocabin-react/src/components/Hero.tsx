import { useEffect, useRef, useState } from 'react';
import { ChromeIcon, PlayIcon } from './Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';
import { QRCodeSVG } from 'qrcode.react';

export default function Hero() {
  const { ref: mockupRef, isVisible: mockupVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const statsRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'android' | 'ios'>('android');

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.apromania.kermeapp';
  const appStoreUrl = language === 'tr'
    ? 'https://apps.apple.com/tr/app/vocabin-dil-%C3%B6%C4%9Frenme/id6749776346?l=tr'
    : 'https://apps.apple.com/tr/app/vocabin-learn-words-save/id6749776346';

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
              <span className="badge">{t('hero.badge')}</span>
            </div>
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-description">{t('hero.description')}</p>
            <div className="hero-cta">
              <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="btn btn-large btn-primary">
                <ChromeIcon size={24} />
                {t('hero.startFree')}
              </a>
              <a href="#demo" className="btn btn-large btn-outline" onClick={(e) => handleNavClick(e, '#demo')}>
                <PlayIcon />
                {t('hero.watchDemo')}
              </a>
            </div>
            <div className="hero-stats" ref={statsRef}>
              <div className="stat-item">
                <div className="stat-number">4.8</div>
                <div className="stat-label">{t('hero.statRating')}</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">500K+</div>
                <div className="stat-label">{t('hero.statWords')}</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">{t('hero.statCountries')}</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div
              ref={mockupRef}
              className={`mobile-promo-card ${mockupVisible ? 'visible' : ''}`}
            >
              <div className="mobile-promo-header">
                <h3 className="mobile-promo-title">{t('hero.mobilePromo.title')}</h3>
                <p className="mobile-promo-subtitle">{t('hero.mobilePromo.subtitle')}</p>
              </div>

              <div className="mobile-tabs">
                <button
                  className={`mobile-tab ${activeTab === 'android' ? 'active' : ''}`}
                  onClick={() => setActiveTab('android')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.523 2.226a.5.5 0 0 0-.682.199l-1.1 1.987a6.5 6.5 0 0 0-7.482 0l-1.1-1.987a.5.5 0 0 0-.88.484l1.06 1.913A6.48 6.48 0 0 0 4.5 10.5h15a6.48 6.48 0 0 0-2.839-5.678l1.06-1.913a.5.5 0 0 0-.198-.683zM8.5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM4.5 11v7a2 2 0 0 0 2 2h1v2.5a1.5 1.5 0 0 0 3 0V20h3v2.5a1.5 1.5 0 0 0 3 0V20h1a2 2 0 0 0 2-2v-7h-15zm-2 0a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5A1.5 1.5 0 0 0 2.5 11zm19 0a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5z"/>
                  </svg>
                  Android
                </button>
                <button
                  className={`mobile-tab ${activeTab === 'ios' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ios')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  iOS
                </button>
              </div>

              <div className="mobile-promo-content">
                <div className="qr-section">
                  <div className="qr-wrapper">
                    <QRCodeSVG
                      value={activeTab === 'android' ? playStoreUrl : appStoreUrl}
                      size={140}
                      level="H"
                      bgColor="#ffffff"
                      fgColor="#1f2937"
                    />
                  </div>
                  <span className="qr-label">{t('hero.mobilePromo.scanQR')}</span>
                </div>

                <a
                  href={activeTab === 'android' ? playStoreUrl : appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge-link"
                >
                  {activeTab === 'android' ? (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="store-badge-img"
                    />
                  ) : (
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="Download on the App Store"
                      className="store-badge-img"
                    />
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
