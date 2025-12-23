import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useHeaderScroll, useActiveSection } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';
import { ChromeIcon } from './Icons';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasScrolled = useHeaderScroll();
  const activeSection = useActiveSection(['features', 'how-it-works', 'pricing', 'testimonials', 'faq']);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t('nav.features'), href: '#features' },
    { label: t('nav.howItWorks'), href: '#how-it-works' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.faq'), href: '#faq' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
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
        }, 100);
      } else {
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
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${hasScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="nav-brand" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <span className="logo">🌱</span>
          <span className="brand-name">Vocabin</span>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="lang-switcher">
            <button
              className={`lang-flag-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="English"
            >
              <svg width="20" height="14" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="42" fill="#012169"/>
                <path d="M0 0L60 42M60 0L0 42" stroke="white" strokeWidth="7"/>
                <path d="M0 0L60 42M60 0L0 42" stroke="#C8102E" strokeWidth="4"/>
                <path d="M30 0V42M0 21H60" stroke="white" strokeWidth="12"/>
                <path d="M30 0V42M0 21H60" stroke="#C8102E" strokeWidth="7"/>
              </svg>
            </button>
            <button
              className={`lang-flag-btn ${language === 'tr' ? 'active' : ''}`}
              onClick={() => setLanguage('tr')}
              aria-label="Turkce"
            >
              <svg width="20" height="14" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="40" fill="#E30A17"/>
                <circle cx="23" cy="20" r="10" fill="white"/>
                <circle cx="26" cy="20" r="8" fill="#E30A17"/>
                <path d="M35 20L39 17L37 21L41 21L37 23L39 27L35 24L31 27L33 23L29 21L33 21L31 17L35 20Z" fill="white"/>
              </svg>
            </button>
          </div>
          <a href="https://chromewebstore.google.com/detail/vocabin-%C3%A7eviri-belle%C4%9Fi/jfkpilejngclplpgcdicdmpbabmagjlf?hl=tr" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <ChromeIcon />
            <span className="btn-text">{t('nav.addToChrome')}</span>
            <span className="btn-text-mobile">{t('nav.add')}</span>
          </a>
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
